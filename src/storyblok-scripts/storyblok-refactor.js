/**
 * Usage:
 * <command> story <old_prefix> <new_prefix>
 * <command> component <old_component_name> <new_component_name>
 * <command> component --PURGE <component_name>
 * <command> field <component_name> --fields [<old_field_name> <new_field_name>] ...
 */

require("@babel/register");
const StoryblokClient = require("storyblok-js-client");
const commandLineArgs = require('command-line-args');

const sbConfig = require("../../gatsby-config");
const spaceId = sbConfig.siteMetadata.spaceId;
const oauthToken = sbConfig.siteMetadata.oauthToken;

// Returns true if any changes were made.
const updateComponentsInStoryContent = (content, options) => {
  if (!(content instanceof Object)) {
    return false;
  } 

  let updated = false;
  const {fieldRename, componentRename, componentPurge} = options;
  if (content.hasOwnProperty("component")){
    if (componentRename && componentRename[content.component]) {
      content.component = componentRename[content.component];
      updated = true;
    }
    if (fieldRename && fieldRename[content.component]) {
      const componentFieldRename = fieldRename[content.component];
      Object.keys(componentFieldRename).forEach((oldField) => {
        if (content.hasOwnProperty(oldField)) {
          content[componentFieldRename[oldField]] = content[oldField];
          delete content[oldField];
          updated = true;
        }
      });
    }
  }
  Object.values(content).forEach((value, key) => {
    if (value instanceof Object && value !== null) {
      if (value instanceof Array) {
        let deleteIndices = [];
        value.forEach((object, index) => {
          if (object === null || (object.component && componentPurge === object.component)){
            deleteIndices.push(index);
          }
          else {
            let childUpdated = updateComponentsInStoryContent(object, options);
            updated = updated || childUpdated;
          }
        });
        while (deleteIndices.length !== 0) {
          value.splice(deleteIndices.pop(), 1);
          updated = true;
        }
      }
      else {
        if (value.component && componentPurge === value.component){
          delete content[key];
          updated = true;
        }
        else {
          let childUpdated = updateComponentsInStoryContent(value, options);
          updated = updated || childUpdated;
        }
      }
    }
  });
  return updated;
}

const modifyComponentsOperation = (options) => (story) => {
  if (story.content && options.componentPurge === story.content.component) {
    return { deleteId: story.id };
  }
  const newStory = {...story};
  if (updateComponentsInStoryContent(newStory.content, options)) {
    return newStory;
  }
  else {
    return null;
  }
}

const renameStoryOperation = (oldPrefix, newPrefix) => (story) => {
  let newStory = {...story};
  if (story.full_slug == oldPrefix || story.full_slug.indexOf(`${oldPrefix}/`) == 0) {
    newStory.full_slug = newPrefix + story.full_slug.substring(oldPrefix.length);
    newStory.slug = newStory.full_slug.split("/").pop();
    return newStory;
  }
  else {
    return null;
  }
};

const updateStoryblokStories = async (operation, storyblokClient) => {
  let Storyblok = storyblokClient || new StoryblokClient({oauthToken});
  const response = await Storyblok.get(`spaces/${spaceId}/stories`);
  const storyRequests = response.data.stories.map((story) => Storyblok.get(`spaces/${spaceId}/stories/${story.id}`));
  const storyResponses = await Promise.all(storyRequests);
  
  let stories = storyResponses.map((storyResponse) => storyResponse.data.story).map(operation);

  const storyUpdateRequests = stories.map(async (story) =>  {
    if (story === null) {
      return null;
    }
    else if (story.deleteId) {
      const response0 = await Storyblok.delete(`spaces/${spaceId}/stories/${story.deleteId}`, null);
      console.info(`DELETE story ${story.deleteId}`);
      return response0;
    }
    else {
      const response0 = await Storyblok.put(`spaces/${spaceId}/stories/${story.id}`, {story})
      console.info(`UPDATE story ${story.id}`);
      return response0;
    }
  });

  await Promise.all(storyUpdateRequests);
}

if (require.main === module) {
  const objectTypeDefinition = {
    name: "objectType",
    type: String,
    defaultOption: true,
  };
  const mainOptions = commandLineArgs([objectTypeDefinition], { stopAtFirstUnknown: true })
  const argv = mainOptions._unknown || [];
  if (mainOptions.objectType == "story") {
    const definitions = [
      {
        name: "names",
        type: String,
        multiple: true,
        defaultOption: true,
      },
    ];
    const options = commandLineArgs(definitions, { argv });
    if (options.names && options.names.length == 2) {
      updateStoryblokStories(renameStoryOperation(options.names[0], options.names[1]))
        .catch((error) => {
          console.error(error.message);
          process.exit(1);
        });
    }
    else {
      console.error("Must pass exactly two story prefixes: the current prefix and the new prefix.");
      process.exit(1);
    }
  }
  else if (mainOptions.objectType == "component") {
    const definitions = [
      {
        name: "names",
        type: String,
        multiple: true,
        defaultOption: true,
      },
      {
        name: "PURGE",
        type: Boolean,
      },
    ];
    const options = commandLineArgs(definitions, { argv });
    if (options.PURGE) {
      if (options.names && options.names.length == 1) {
        updateStoryblokStories(modifyComponentsOperation({componentPurge: options.names[0]}))
          .catch((error) => {
            console.error(error.message);
            process.exit(1);
          });
      }
      else {
        console.error("Only one component type can be purged at a time.");
        process.exit(1);
      }
    }
    else {
      if (options.names && options.names.length == 2) {
        updateStoryblokStories(modifyComponentsOperation({componentRename: { [options.names[0]]: options.names[1] } }))
          .catch((error) => {
            console.error(error.message);
            process.exit(1);
          });
      }
      else {
        console.error("Must pass exactly two component names: the current name and the new name.");
        process.exit(1);
      }
    }
  }
  else if (mainOptions.objectType == "field") {
    const definitions = [
      {
        name: "component",
        defaultOption: true,
        type: String,
      },
      {
        name: "fields",
        alias: "f",
        type: String,
        multiple: true,
      },
    ];
    const options = commandLineArgs(definitions, { argv });
    if (options.component && options.fields && options.fields.length !== 0 && options.fields.length % 2 == 0) {
      const fieldRename = { [options.component]: {} };
      if (options.fields.some((field) => (field === "_uid" || field === "component"))) {
        console.error("Illegal field name. Cannot rename or reassign \"_uid\" or \"component\".");
        process.exit(1);
      }
      for (let i = 0; i < options.fields.length; i += 2) {
        fieldRename[options.component][options.fields[i]] = options.fields[i+1];
      }
      updateStoryblokStories(modifyComponentsOperation({ fieldRename }))
        .catch((error) => {
          console.error(error.message);
          process.exit(1);
        });
    }
    else {
      console.error("Invalid arguments for field refactor - must have one component name and one or more field name pairs.");
      process.exit(1);
    }
  }
  else {
    console.error(`Invalid command ${mainOptions.objectType}.`);
    process.exit(1);
  }
}
