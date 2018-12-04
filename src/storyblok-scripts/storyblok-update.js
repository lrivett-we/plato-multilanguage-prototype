require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
  ],
});

const StoryblokClient = require("storyblok-js-client");
const components = require("../components/settings").default;

const sbConfig = require("../../gatsby-config");
const spaceId = sbConfig.siteMetadata.spaceId;
const oauthToken = sbConfig.siteMetadata.oauthToken;

const getComponentUpdates = (liveComponents, sourceComponents) => {
  let postItems = [];
  let putItems = [];
  let deleteItems = [];

  let componentsPresent = {};
  Object.keys(sourceComponents).forEach(componentName => {
    componentsPresent[componentName] = false;
  });
  liveComponents.forEach(liveComponent => {
    let componentName = liveComponent.name;
    if (componentName in sourceComponents) {
      // Update the component on Storyblok to the latest version.
      let Comp = sourceComponents[componentName];
      componentsPresent[componentName] = true;
      let newSettings = { ...Comp.blokSettings };
      newSettings.name = componentName;
      newSettings.id = liveComponent.id;
      putItems.push(newSettings);
    } else {
      // Remove components from Storyblok which have no corresponding class in the code.
      deleteItems.push(liveComponent);
    }
  });
  // Add all components which are in the code but not on the site.
  Object.keys(componentsPresent).forEach((componentName) => {
    if (!componentsPresent[componentName]) {
      const Comp = sourceComponents[componentName];
      if (!Comp.blokSettings) {
        return;
      }
      let newSettings = Comp.blokSettings;
      newSettings.name = componentName;
      postItems.push(newSettings);
    }
  });

  return { postItems, putItems, deleteItems };
};

const updateStoryblokComponents = async (Storyblok, components) => {
  const getResponse = await Storyblok.get(`spaces/${spaceId}/components`);

  const { postItems, putItems, deleteItems } = getComponentUpdates(
    getResponse.data.components,
    components
  );

  const postRequests = postItems.map(component =>
    Storyblok.post(`spaces/${spaceId}/components`, { component })
  );
  const putRequests = putItems.map(component =>
    Storyblok.put(`spaces/${spaceId}/components/${component.id}`, { component })
  );
  const deleteRequests = deleteItems.map(component =>
    Storyblok.delete(`spaces/${spaceId}/components/${component.id}`, null)
  );


  await Promise.all(postRequests.concat(putRequests).concat(deleteRequests));
  postItems.forEach((component) => {
    console.info(`CREATE component ${component.name}`);
  });
  putItems.forEach((component) => {
    console.info(`UPDATE component ${component.name}`);
  });
  deleteItems.forEach((component) => {
    console.info(`DELETE component ${component.name}`);
  });
}

const getParentId = async (Storyblok, fullSlug, names) => {
  if (fullSlug.indexOf("/") !== -1) {
    const parentPath = fullSlug.substring(0, fullSlug.lastIndexOf("/"));
    const slug = parentPath.substring(parentPath.lastIndexOf("/")+1) || parentPath;
    const parentStories = (await Storyblok.get(`spaces/${spaceId}/stories?with_slug=${parentPath}`)).data.stories;
    if (!parentStories || parentStories.length === 0) {
      let parentNameList = null;
      let name = null;
      if (names && names.length >= 2 && names instanceof Array) {
        parentNameList = [...names];
        parentNameList.pop();
        name = parentNameList[parentNameList.length-1];
      }
      else {
        name = slug;
      }
      const grandparentId = await getParentId(Storyblok, parentPath, parentNameList);
      const story = {
        name,
        slug,
        full_slug: parentPath,
        parent_id: grandparentId,
        is_folder: true,
        content: {
          body: [],
          component: "root",
        },
      };
      try {
        const response = await Storyblok.post(`spaces/${spaceId}/stories`, { story, publish: 1 });
        return response.data.story.id;
      }
      catch (error) {
        throw new Error(`Failed to create folder ${parentPath}`);
      }
    } else if (parentStories && parentStories.length === 1) {
      return parentStories[0].id;
    } else {
      throw new Error("Unexpected behaviour - found non-unique full slug.");
    }
  } else {
    return 0;
  }
}

const createStoryblokPartials = async (Storyblok, components) => {
  for (let componentName in components) {
    const component = components[componentName];
    if (component.hasOwnProperty("partialSettings")) {
      const slug = component.partialSettings.path;
      const partialPath = `en_ca/___partial/${slug}`;
      let partialName = component.partialSettings.name || component.partialSettings.path;
      let partialNames = ["English (Canada)", "Partial Components", partialName];
      const componentStories = (await Storyblok.get(`spaces/${spaceId}/stories?with_slug=${partialPath}`)).data.stories;
      if (!componentStories || componentStories.length === 0) {
        let parentId = await getParentId(Storyblok, partialPath, partialNames);
        const story = {
          slug,
          full_slug: partialPath,
          name: partialName,
          parent_id: parentId,
        };
        if (component.partialSettings.hasOwnProperty("singleton")) {
          story.is_folder = false;
          story.content = {...component.partialSettings.singleton, component: componentName};
        }
        else {
          story.is_folder = true;
          story.default_root = componentName;
          story.content = {
            body: [],
            component: "root",
          }
        }
        await Storyblok.post(`spaces/${spaceId}/stories`, { story, publish: 1 });
        console.info(`CREATE partial story ${partialPath}`);
      }
    }
  }
};

const updateStoryblok = async (components, storyblokClient) => {
  let Storyblok = storyblokClient || new StoryblokClient({ oauthToken });
  await updateStoryblokComponents(Storyblok, components);
  await createStoryblokPartials(Storyblok, components);
}

if (require.main === module) {
  updateStoryblok(components)
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
else {
  module.exports = { updateStoryblok };
}
