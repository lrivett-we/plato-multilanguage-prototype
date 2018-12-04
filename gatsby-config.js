const environment = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
require("dotenv").config({path: `.env.${environment}`});

const options = {
  accessToken: process.env.ACCESS_TOKEN,
  homeSlug: "home",
  version: "draft",
}

if (environment === "production") {
  options.version = "published";
}

module.exports = {
  siteMetadata: {
    environment,
    title: "Gatsby Default Starter",
    spaceId: process.env.SPACE_ID,
    oauthToken: process.env.OAUTH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      options,
      resolve: "gatsby-source-storyblok",
    },
  ],
}
