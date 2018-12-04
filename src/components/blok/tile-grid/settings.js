import datasource from "../../../datasources/datasources";
const colours = datasource.colours;

const settings = {
  blokSettings: {
    display_name: "Tile Grid",
    is_root: false,
    is_nestable: true,
    schema: {},
  }
}

const groups = ["topLeft", "topRight", "middle", "donate", "bottomLeft", "bottomCentre", "bottomRight"];
groups.forEach((tile, index) => {
  const tileFields = {
    Title: {
      display_name: "Title",
      type: "text",
      pos: 0,
    },
    Subtitle: {
      display_name: "Subtitle",
      type: "text",
      pos: 1,
    },
    TextColour: {
      display_name: "Text Colour",
      type: "option",
      options: colours,
      pos: 2,
    },
    Image: {
      display_name: "Image",
      type: "image",
      pos: 3,
    },
    AltText: {
      display_name: "Image Alt Text",
      type: "text",
      pos: 4,
    },
  };

  const schema = settings.blokSettings.schema;

  const fieldNames = Object.keys(tileFields);

  schema[tile] = {
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
