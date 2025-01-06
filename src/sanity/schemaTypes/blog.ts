export const blog = {
  name: "blog",
  title: "Blog",
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "oldPrice",
      title: "Old Price",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
        name: "stock",
        title: "Stock",
        type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
