export const blogPost = {
    name: "blogPost",
    title: "BlogPost",
    type: "document",
    fields: [
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "date",
        title: "Date",
        type: "date"
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "author",
        title: "Author",
        type: "string",
      },
      {
          name: "excerpt",
          title: "Excerpt",
          type: "text",
      },
      {
          name: "descruption",
          title: "Descruption",
          type: "text",
      },
      {
          name: "headlines",
          title: "Headlines",
          type: "text",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
    ],
  };
  
 