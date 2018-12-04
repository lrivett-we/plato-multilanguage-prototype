import datasource from "../../../datasources/datasources";
const colours = datasource.colours;

const settings = {
  blokSettings: {
    display_name: "Hero Image",
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: "text",
        pos: 0,
      },
      subtitle: {
        type: "text",
        pos: 1,
      },
      textColour: {
        type: "option",
        options: colours,
        pos: 2,
      },
      image: {
        type: "image",
        pos: 3,
      },
      altText: {
        type: "text",
        pos: 4,
      }
    },
  },
};

export default settings;
