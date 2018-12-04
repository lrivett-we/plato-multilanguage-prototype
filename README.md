# Setting Up

Clone the repo and run `npm install`.

Create a `.env.development` file at root level:

    # Storyblok User Variables
    OAUTH_TOKEN=YourTokenHere
 
    # Storyblok Space Variables
    SPACE_ID=YourSpaceIdHere
    ACCESS_TOKEN=YourPreviewIdHere
    
`OAUTH_TOKEN` can be found in Storyblok under Account > Personal Access Tokens. Once you've generated a token it will become hidden so you may need to generate a new one.

`SPACE_ID` can be found in Storyblok under settings for that space.

`ACCESS_TOKEN` can be found in the same place, under API-Keys. Make sure that you use a preview token (generate one if there are none)

Both the `SPACE_ID` and `ACCESS_TOKEN` can be aquired by running `./space get IDENTIFIER` where `IDENTIFIER` is either the name of the space or its ID. 

In order to have your Storyblok space's components in sync with the components in the code, run `./space update` in the root folder.

Note that the `space` script can only be run from the root folder.

Run `gatsby develop` to be able to see your page (your default environment in Storyblok for the space should be http://localhost:8000/editor?path=).

To test that your local server can build all pages, run `ACTIVE_ENV=development gatsby build`. If there is an error on any page, the build will fail.
