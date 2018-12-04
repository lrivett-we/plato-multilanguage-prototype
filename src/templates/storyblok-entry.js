import React from 'react';
import Components from '../components/components.js';

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null;
    }

    return StoryblokEntry.prepareStory(props);
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story);
    story.content = JSON.parse(story.content);
    
    const partial = props.pageContext.partial;
    const language = props.pageContext.language;
    
    return { story, partial, language };
  }

  constructor(props) {
    super(props);

    this.state = StoryblokEntry.prepareStory(props);
  }

  render() {
    let content = this.state.story.content;
    let partial = this.state.partial;
    let language = this.state.language;

    return (
      <div>
        {React.createElement(Components[content.component], {partial, language, key: content._uid, blok: content})}
      </div>
    )
  }
}

export default StoryblokEntry;
