import { defineField, defineType } from "sanity";

export const allProducts = defineType({
  name: "allproducts",
  title: "All Products",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isSale",
      title: "Is Sale?",
      type: "boolean",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
    }),
    defineField({
      name: "size",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
  ],
});
