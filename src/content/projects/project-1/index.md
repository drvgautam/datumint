---
title: "Project One"
summary: "Lorem ipsum dolor sit amet"
date: "Mar 18 2022"
draft: false
tags:
- Astro
- Javascript
- Typescript
- Tailwind
- SolidJs
demoUrl: https://astro-sphere-demo.vercel.app
repoUrl: https://github.com/markhorn-dev/astro-sphere
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.



### Basics

Create a folder in the respective collection you wish to create content. The name of the folder will be the slug in which your content will be found.

```text
creating the following

/content/blog/my-new-post/index.md

will be published to

https://yourdomain.com/blog/my-new-post

```

### Frontmatter

Front matter is in yaml if you are familiar with the format. All posts and projects require frontmatter at the top of the document to be imported. All frontmatter must be inside triple dashes, similar to Astro format. See example below.

### Blog Collection

| Field   | Type    | Req? | Description                                                   |
| :------ | :------ | :--- | :------------------------------------------------------------ |
| title   | string  | yes  | Title of the post. Used in SEO.                               |
| summary | string  | yes  | Short description of the post. Used in SEO.                   |
| date    | string  | yes  | Any string date that javascript can convert. Used in sorting  |
| tags    | array   | yes  | Post topic. Array of strings. Used in filtering.              |
| draft   | boolean | no   | Hides the post from collections. Unpublished entry.           |

Example blog post frontmatter

```yaml
---
title: "Astro Sphere: Adding a new post or project."
summary: "Adding a new article (blog post or project) is pretty easy."
date: "Mar 18 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---
```

### Projects Collection (extends Blog Collection)

| Field   | Type    | Req? | Description                                                   |
| :------ | :------ | :--- | :------------------------------------------------------------ |
| title   | string  | yes  | Title of the post. Used in SEO.                               |
| summary | string  | yes  | Short description of the post. Used in SEO.                   |
| date    | string  | yes  | Any string date that javascript can convert. Used in sorting  |
| tags    | array   | yes  | Post topic. Array of strings. Used in filtering.              |
| draft   | boolean | no   | Hides the post from collections. Unpublished entry.           |
| demoUrl | string  | no   | A link to the deployed project, if applicable.                |
| repoUrl | string  | no   | A link to the repository, if applicable.                      |

Example project frontmatter

```yaml
---
title: "Astro Sphere"
summary: "Astro Sphere, a portfolio and blog for designers and developers."
date: "Mar 18 2024"
draft: false
tags:
- Astro
- Typescript
- Javascript
- Tailwind
- SolidJS
demoUrl: https://astro-sphere.vercel.app
repoUrl: https://github.com/markhorn-dev/astro-sphere
---
```

### Write your content
You've made it this far, all that is left to do is write your content beneath the frontmatter. Writing markdown will be covered in the next article.