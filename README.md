# Apt.97

A blog to display our collection of recipes and cocktails.

It's created using Next.js with static building and hosted on Vercel.
<br />
<br />

## Adding a post

### The markdown

To add a new recipe or cocktail, create a new `.md` file in the `_food` or `_drinks` top folder.

The new file should be named the same as the route that will link to the post, for example `spaghetti-carbonara.md`.

**The file must be written in [Markdown](https://www.markdownguide.org/basic-syntax/) and include a Frontmatter and a body.**

Example file contents:

```
---
title: 'Pasta alla carbonara'
excerpt: 'A simple and tasty plate of pasta.'
coverImage: 'cover.png'
date: '2022-09-25T21:39:41.361Z'
author: Simone
servings: 1
ingredients:
  - 220g spaghetti
  - 2 eggs
  - 50g grated pecorino
  - 100g smoked bacon lardons
  - salt & pepper as needed
tags:
  - pasta
  - savoury
  - main
  - bacon
---

Some great text that introduces the recipe.

1. Lorem
1. Ipsum
1. Dolor sit amet

Some extra text to say enjoy your meal!
```

<br />

**Required frontmatter fields**

- `title`: `string` - The name of the recipe/cocktail
- `excerpt`: `string` - A short description of the recipe/cocktail
- `date`: `string` - The date the recipe was added in ISO format - you can obtain it by returning `new Date().toISOString()` in any browser console
- `author`: `string` - The name of the person who has created the recipe/cocktail
- `servings`: `number` - How many people this recipe/cocktail will serve
- `ingredients`: `string[]` - An array of the ingredients required to make the recipe/cocktail
- `tags`: `string[]` - An array of tags used to filter this recipe/cocktail

**Optional frontmatter fields**

- `coverImage`: `string` - The title of the image used as preview/cover. It defaults to `cover.jpg`
  <br />
  <br />

## Adding images

**Every post must have a cover image.**

All images must be saved in the folder `public/images/[_food|_drinks]/{slug}/`, with `slug` being the same as the name of the `.md` file. If the cover image is named `cover.png`, the name does not need to be added to the frontmatter `coverImage` field. If it's different, then it must be added there.

Any other image that you wish to add to the post should be included in the same folder, and it can be referenced directly in the markdown using relative paths.
