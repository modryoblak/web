import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    // repo: "modryoblak/web",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "@assets/images/posts",
            },
          },
        }),
        author: fields.text({
          label: "Author",
          validation: { isRequired: true },
        }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        cover: fields.image({
          label: "Cover",
          directory: "src/assets/images/posts",
          publicPath: "/src/assets/images/posts",
        }),
      },
    }),
    redirects: collection({
      label: "Redirects",
      slugField: "name",
      path: "src/content/redirects/*",
      schema: {
        name: fields.slug({
          name: { label: "Name", validation: { isRequired: true } },
        }),
        base: fields.text({
          label: "From",
          description: "The path from which to redirect /go/...",
          validation: { isRequired: true },
        }),
        redirect: fields.url({
          label: "Redirect",
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
