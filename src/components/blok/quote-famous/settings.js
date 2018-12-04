const settings = {
  blokSettings: {
    display_name: "Quote, Famous",
    is_root: false,
    is_nestable: true,
    schema: {
      quote: {
        type: "option",
        source: "internal_stories",
        folder_slug: "{0}/___partial/quotes",
      },
    },
  },
};

export default settings;
