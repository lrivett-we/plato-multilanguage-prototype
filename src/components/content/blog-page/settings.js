import titleBarSettings from "../../blok/title-bar/settings";
import creditImageSettings from "../../blok/credited-image/settings";

const titleBarSchema = titleBarSettings.blokSettings.schema;
const creditImageSchema = creditImageSettings.blokSettings.schema;

const titleBarFields = Object.keys(titleBarSchema);
const creditImageFields = Object.keys(creditImageSchema);


const settings = {
  blokSettings: {
    display_name: "Blog Page",
    is_root: true,
    is_nestable: false,
    schema: {
      titleBar: {
        display_name: "Built-In Title Bar",
        type: "section",
        keys: titleBarFields,
      },
      ...titleBarSchema,
      creditedImage: {
        display_name: "Built-In Credited Image",
        type: "section",
        keys: creditImageFields,
      },
      ...creditImageSchema,
      blogBody: {
        display_name: "Blog Body",
        is_nestable: true,
        type: "bloks",
        restrict_components: true,
        component_whitelist: [
          "blogHeading",
          "blogParagraph",
          "inTextList",
          "quoteParagraph",
          "relatedArticleLink",
        ],
      },
      body: {
        display_name: "Page Body",
        type: "bloks",
      },
    },
  },
};





export default settings;
