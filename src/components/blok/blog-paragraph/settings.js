const settings = {
  blokSettings: {
    display_name: "Paragraph",
    is_root: false,
    is_nestable: true,
    schema: {
      text: {
        type: "textarea",
        pos: 0,
      },
      fontSize: {
        display_name: "Font Size",
        type: "option",
        options: [
          {
            name: "Large",
            value: "large",
          },
          {
            name: "Main",
            value: "main",
          },
          {
            name: "Small",
            value: "small",
          },
        ],
        default_value: "main",
        pos: 1,
      },
    },
  },
};

export default settings;
