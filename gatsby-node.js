const path = require('path');
const sbConfig = require("./gatsby-config");
const datasource = require("./src/datasources/datasources");
const languages = datasource.languages;
const productionLocale = sbConfig.siteMetadata.productionLocale;

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
  const contentEntries = entries.filter((entry) => !/___partial/.test(entry.node.full_slug));
  const partial = {};
  partialEntries.forEach((entry) => {
    let slugPath = entry.node.full_slug.split("/");
    let nodePointer = partial;
    for (let i = 0; i < slugPath.length; ++i) {
      if (slugPath[i] === "___partial") {
        continue;
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

  if (productionLocale !== null) {
    localeEntries = contentEntries.filter((entry) => (entry.node.full_slug.indexOf(productionLocale) === 0));
    localeEntries.forEach((entry) => {
      const path = (entry.node.full_slug === productionLocale + "/") ? "/" : entry.node.full_slug.substring(entry.node.full_slug.indexOf("/")+1);
      createPage({
        path: path,
        component: storyblokEntry,
        context: {
          partial: {...partial.en_ca, ...partial[productionLocale]},
          language: languages[productionLocale] || languages.en_ca,
          story: entry.node
        }
      });
    });
  }
  else {
    contentEntries.forEach((entry) => {
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
};
