const path = require('path');
const datasource = require("./src/datasources/datasources");
const languages = datasource.languages;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');

  const getStoryblokEntries = graphql(
    `{
      allStoryblokEntry {
        edges {
          node {
            id
            name
            created_at
            uuid
            slug
            full_slug
            content
            is_startpage
            parent_id
            group_id
          }
        }
      }
    }`
  );

  const results = await Promise.all([getStoryblokEntries]);

  results.forEach((result) => {
    if (result.errors) {
      console.error(result.errors);
      throw result.errors;
    }
  })

  const [getStoryblokEntriesResult] = results;

  const entries = getStoryblokEntriesResult.data.allStoryblokEntry.edges;

  const partialEntries = entries.filter((entry) => /___partial/.test(entry.node.full_slug));
  const partial = {};
  partialEntries.forEach((entry) => {
    let slugPath = entry.node.full_slug.split("/");
    let nodePointer = partial;
    for (let i = 0; i < slugPath.length; ++i) {
      if (slugPath[i] === "___partial") {
        continue;``
      }
      if (i === slugPath.length - 1) {
        nodePointer[slugPath[i]] = nodePointer[entry.node.id] = JSON.parse(entry.node.content);
      }
      else {
        if (!nodePointer.hasOwnProperty(slugPath[i])) {
          nodePointer[slugPath[i]] = {};
        }
        nodePointer = nodePointer[slugPath[i]];
      }
    }
  })

  entries.forEach((entry) => {
    const locale = entry.node.full_slug.split("/")[0];
    const path = entry.node.full_slug === "___root" ? "/" : entry.node.full_slug;
    createPage({
      path: path,
      component: storyblokEntry,
      context: {
        partial: {...partial.en_ca, ...partial[locale]},
        language: languages[locale] || languages.en_ca,
        story: entry.node
      }
    });
  });
}
