const settings = {
  blokSettings: {
    display_name: "In Text List",
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        display_name: "List Title",
        type: "text",
        pos: 0,
      },
      fontSize: {
        display_name: "Font Size",
        type: "option",
        options: [
          {name: "Small", value: "small"},
          {name: "Main", value: "main"},
          {name: "Large", value: "large"},
        ],
        pos: 1
      },
      listItems: {
        display_name: "List Items",
        type: "bloks",
        restrict_components: true,
        component_whitelist: ["listItem"],
        pos: 2,
      },
    },
  }
}

export default settings;
