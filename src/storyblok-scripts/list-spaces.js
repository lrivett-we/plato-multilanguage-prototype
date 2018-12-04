const StoryblokClient = require('storyblok-js-client');
const sbConfig = require("../../gatsby-config");
const oauthToken = sbConfig.siteMetadata.oauthToken;

const listSpaces = async () => {
  let Storyblok = new StoryblokClient({ oauthToken });
  const spaces = (await Storyblok.get("spaces")).data.spaces;
  spaces.forEach((space) => {
    console.info(space.name);
    console.info(`SPACE_ID=${space.id}`);
    console.info();
  })
}


if (require.main === module) {
  listSpaces()
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}
else {
  module.exports = { listSpaces };
}
