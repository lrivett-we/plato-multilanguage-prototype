const settings = {
  blokSettings: {
    display_name: "Quote-Paragraph Block",
    is_root: false,
    is_nestable: true,
    schema: {
      paragraph: {
        type: "section",
        keys: ["paragraphBody", "fontSize"],
        pos: 0,
      },
      quote: {
        type: "section",
        keys: ["quoteBody", "quoteAuthor", "quoteDescription"],
        pos: 1,
      },
      paragraphBody: {
        display_name: "Text",
        type: "textarea",
        pos: 2,
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
        pos: 3,
      },
      quoteBody: {
        display_name: "Quote",
        type: "text",
        pos: 4,
      },
      quoteAuthor: {
        display_name: "Author",
        type: "text",
        pos: 5,
      },
      quoteDescription: {
        display_name: "Description",
        type: "text",
        pos: 6,
      },
    },
  },
};

export default settings;
