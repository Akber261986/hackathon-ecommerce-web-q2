import { defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "clerkId",
      title: "Clerk Id",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      hidden: true, // Do not expose passwords in the Sanity Studio
    },
    {
      name: "mobile",
      title: "Mobile",
      type: "string"
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },

    {
      name: "image",
      title: "Image",
      type: "image",
    }
  ],
});


