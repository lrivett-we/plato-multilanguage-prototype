const settings = {
  blokSettings: {
    display_name: "Partial Toolbar",
    is_root: true,
    is_nestable: false,
    schema: {
      pageTitle: {
        type: "text",
        pos: 0,
      },
      tagline: {
        type: "text",
        pos: 1,
      },
    },
  },
  partialSettings: {
    path: "toolbar",
    name: "Toolbar",
    singleton: {
      pageTitle: "Page Title",
      tagline: "Tagline",
    },
  },
};

export default settings;
