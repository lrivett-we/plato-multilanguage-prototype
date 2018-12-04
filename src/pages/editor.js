import React from 'react';
import { graphql } from "gatsby"
import Components from '../components/components.js';
import SbEditable from 'storyblok-react';
const datasource = require("../datasources/datasources");
const languages = datasource.languages;

const loadStoryblokBridge = function(cb, data) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${data.site.siteMetadata.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = function(val) {
  var result = ''
  var tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {partial: {}, story: null}
    this.language = {}
  }

  componentDidMount() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() }, this.props.data)
  }

  loadPartialData(story) {
    window.storyblok.getAll({
      version: "draft"
    }, (data) => {
      const partialStories = data.stories.filter((entry) => /___partial/.test(entry.full_slug));
      const partial = {};
      partialStories.forEach((story) => {
        let slugPath = story.full_slug.split("/");
        let nodePointer = partial;
        for (let i = 0; i < slugPath.length; ++i) {
          if (slugPath[i] === "___partial") {
            continue;
          }
          if (i === slugPath.length - 1) {
            nodePointer[slugPath[i]] = nodePointer[`storyblokentry-${story.id}`] = story.content;
          } else {
            if (!nodePointer.hasOwnProperty(slugPath[i])) {
              nodePointer[slugPath[i]] = {};
            }
            nodePointer = nodePointer[slugPath[i]];
          }
        }
      })
      this.setState({story, partial: {...partial.en_ca, ...partial[story.full_slug.split("/")[0]]}});
    })
  }

  loadLanguage() {
    const language_slug = getParam("path").split("/")[0];
    this.language = languages[language_slug] || languages["default"];
    this.forceUpdate();
  }

  loadStory(payload) {
    window.storyblok.get({
      slug: payload.storyId,
      version: 'draft',
    }, (data) => {
      this.loadPartialData(data.story);
      this.loadLanguage();
    })
  }

  initStoryblokEvents() {
    this.loadStory({storyId: getParam('path')})

    let sb = window.storyblok

    sb.on(['change', 'published'], (payload) => {
      this.loadStory(payload)
    })

    sb.on('input', (payload) => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        this.setState({story: payload.story})
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return (<div></div>)
    }

    let content = this.state.story.content;
    let partial = this.state.partial;
    
    return (
      <SbEditable content={content}>
        <div>
          {React.createElement(Components[content.component], {partial, language: this.language, key: content._uid, blok: content})}
        </div>
      </SbEditable>
    )
  }
}

export default StoryblokEntry

export const query = graphql`
  query {
    site {
      siteMetadata {
        accessToken
      }
    }
  }
`
