const settings = {
  blokSettings: {
    display_name: "Title Bar",
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        display_name: "Title",
        type: "text",
      },
      summary: {
        display_name: "Summary",
        type: "text",
      },
      profilePicture: {
        display_name: "Profile Picture",
        type: "image",
      },
      authorName: {
        display_name: "Author",
        type: "text",
      },
      publishedDate: {
        display_name: "Published Date",
        type: "datetime",
      },
    }
  }
}

export default settings;
