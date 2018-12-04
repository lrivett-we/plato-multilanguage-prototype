import datasource from "../../../datasources/datasources";
const colours = datasource.colours;
const settings = {
  blokSettings: {
    display_name: "Partial Quote",
    is_root: true,
    is_nestable: false,
    schema: {
      quotation: {
        type: "text",
        pos: 0,
      },
      author: {
        type: "text",
        pos: 1,
      },
      textColour: {
        type: "option",
        options: colours,
        pos: 2,
      },
      backgroundColour: {
        type: "option",
        options: colours,
        pos: 3,
      },
    },
  },

  partialSettings: {
    path: "quotes",
    name: "Quotes",
  },
};

export default settings;
