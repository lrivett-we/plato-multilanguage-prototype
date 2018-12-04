const settings = {
  blokSettings: {
    display_name: "Related Article Link",
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: "text",
        pos: 0,
      },
      category: {
        type: "text",
        pos: 1,
      },
      articleURL: {
        display_name: "Article URL",
        type: "multilink",
        pos: 2,
      },
      image: {
        type: "image",
        pos: 3,
      },
      altText: {
        type: "text",
        pos: 4,
      },
    },
  },
};

export default settings;
