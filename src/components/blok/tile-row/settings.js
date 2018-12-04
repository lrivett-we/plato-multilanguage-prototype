import datasource from "../../../datasources/datasources";
const colours = datasource.colours;

const settings = {
  blokSettings: {
    display_name: "Tile Row",
    is_root: false,
    is_nestable: true,
    preview_field: "firstTitle",
    schema: {},
  }
}

const groups = ["first", "second", "third"];
groups.forEach((tile, index) => {
  const tileFields = {
    Title: {
      display_name: "Title",
      type: "text",
      pos: 0,
    },
    TextColour: {
      display_name: "Text Colour",
      type: "option",
      options: colours,
      pos: 1,
    },
    Image: {
      display_name: "Image",
      type: "image",
      pos: 2,
    },
    AltText: {
      display_name: "Image Alt Text",
      type: "text",
      pos: 3,
    },
  };

  const schema = settings.blokSettings.schema;

  const fieldNames = Object.keys(tileFields);

  schema[`${tile}Tile`] = {
    type: "section",
    keys: fieldNames.map((field) => (tile + field)),
    pos: index,
  }

  fieldNames.forEach((field) => {
    const fieldSchema = tileFields[field];
    schema[tile + field] = {
      ...fieldSchema,
      pos: fieldSchema.pos + groups.length + (index * fieldNames.length),
    }
  });
});

export default settings;
