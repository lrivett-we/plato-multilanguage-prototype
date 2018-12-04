
const settings = {
  blokSettings: {
    display_name: "Credited Image",
    is_root: false,
    is_nestable: true,
    schema: {
      image: {
        type: "image",
        pos: 0,
      },
      altText: {
        type: "text",
        pos: 1,
      },
      photoCredit: {
        type: "text",
        pos: 2,
      },
    },
  },
};

export default settings;
