import { defineField, defineType } from "sanity";

 const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
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
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
    }),
    defineField({
      name: "productCode",
      title: "Product Code",
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
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stockLevel",
      title: "Stock Level",
      type: "number",
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
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

export default product;