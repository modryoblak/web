import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "modryoblak/blog",
  },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
        }),
        author: fields.text({ label: "Author" }),
        date: fields.date({ label: "Date" }),
        cover: fields.image({ label: "Cover" }),
      },
    }),
  },
});
