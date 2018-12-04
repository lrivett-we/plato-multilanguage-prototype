const settings = {
  blokSettings: {
    display_name: "Heading",
    is_root: false,
    is_nestable: true,
    schema: {
      text: {
        type: "text",
        pos: 0,
      },
      headingType: {
        type: "option",
        options: [
          {
            name: "H2",
            value: "h2",
          },
          {
            name: "H3",
            value: "h3",
          },
          {
            name: "H4",
            value: "h4",
          },
          {
            name: "H5",
            value: "h5",
          },
          {
            name: "H6",
            value: "h6",
          },
        ],
        default_value: "h2",
        pos: 1,
      },
    },
  },
};

export default settings;
