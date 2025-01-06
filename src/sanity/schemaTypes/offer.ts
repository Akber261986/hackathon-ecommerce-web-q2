export const offer = {
    name: "offer",
    title: "Offer",
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
        name: "color",
        title: "Color",
        type: "string"
      },
      {
        name: "size",
        title: "Size",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
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
  