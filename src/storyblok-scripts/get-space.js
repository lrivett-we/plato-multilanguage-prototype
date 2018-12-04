const StoryblokClient = require('storyblok-js-client');
const sbConfig = require("../../gatsby-config");
const oauthToken = sbConfig.siteMetadata.oauthToken;

const getSpace = async (spaceId) => {
  let Storyblok = new StoryblokClient({ oauthToken });
  let targetSpace = null;

  if (isNaN(spaceId)) {
    const spaces = (await Storyblok.get("spaces")).data.spaces;
    let spaceName = spaceId;

    targetSpace = spaces.find((space) => space.name === spaceName);
    if (!targetSpace) {
      throw new Error(`No space found with name "${spaceName}"`);
    }
  }
  else {
    try {
      targetSpace = (await Storyblok.get(`spaces/${spaceId}`)).data.space;
    } catch (error) {
      if (error.response.status === 404) {
        throw new Error(`No space found with ID ${spaceId}`);
      }
      else {
        throw error;
      }
    }
  }

  response = await Storyblok.get(`spaces/${targetSpace.id}`);
  console.info(response.data.space.name);
  console.info(`SPACE_ID=${response.data.space.id}`);
  console.info(`ACCESS_TOKEN=${response.data.space.first_token}`);
}


if (require.main === module) {
  getSpace(process.argv[2])
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
else {
  module.exports = { getSpace };
}
