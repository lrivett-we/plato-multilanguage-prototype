const StoryblokClient = require("storyblok-js-client");
const sbConfig = require("../../gatsby-config");
const oauthToken = sbConfig.siteMetadata.oauthToken;

const duplicateSpace = async (oldSpaceId, newName) => {
  let Storyblok = new StoryblokClient({ oauthToken });
  let oldSpace = null;

  const spaces = (await Storyblok.get("spaces")).data.spaces;
  let space = spaces.find((space) => space.name === newName)
  if (space) {
    throw new Error(`Space name "${newName}" is already in use by space ${space.id}`)
  }
  if (isNaN(oldSpaceId)) {
    let oldSpaceName = oldSpaceId;
    oldSpace = spaces.find((space) => space.name === oldSpaceName);
    if (!oldSpace) {
      throw new Error(`No space found with name "${oldSpaceName}"`);
    }
  }
  else {
    try {
      oldSpace = (await Storyblok.get(`spaces/${oldSpaceId}`)).data.space;
    } catch (error) {
      if (error.response.status === 404) {
        throw new Error(`No space found with ID ${oldSpaceId}`);
      }
      else {
        throw error;
      }
    } 
  }

  let response = await Storyblok.post("spaces", { "space": { "name": newName, "domain": "http://localhost:8000/editor?path=" }, "dup_id": oldSpace.id });

  const newSpaceId = response.data.space.id;
  // For some reason, setting the domain in the above function does not 
  // work. If storyblok every fixes this, then the setting of the domain 
  // below is not needed
  response = await Storyblok.put(`spaces/${newSpaceId}`, { "space": { "domain": "http://localhost:8000/editor?path=" } });
  console.info(response.data.space.name);
  console.info(`SPACE_ID=${response.data.space.id}`);
  console.info(`ACCESS_TOKEN=${response.data.space.first_token}`);
}


if (require.main === module) {
  duplicateSpace(process.argv[2], process.argv[3])
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
else {
  module.exports = { duplicateSpace };
}