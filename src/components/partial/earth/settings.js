import datasource from "../../../datasources/datasources";
const colours = datasource.colours;

const settings = {
  blokSettings: {
    display_name: "Partial Earth",
    is_root: true,
    is_nestable: false,
    schema: {
      colour: {
        type: "option",
        options: colours,
        pos: 0,
      },
      caption: {
        type: "text",
        pos: 1,
      },
    },
  },
  partialSettings: {
    path: "earth",
    name: "Earth",
    singleton: {
      caption: "Caption",
      colour: "#1d2530",
    },
  },
};

export default settings;
