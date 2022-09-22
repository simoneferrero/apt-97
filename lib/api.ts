import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const fieldMap = {
    ...data,
    content,
    slug: realSlug,
  }

  const items: Items = fields.reduce(
    (allItems, field) => ({
      ...allItems,
      [field]: fieldMap[field],
    }),
    {},
  )

  return items
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts alphabetically
    .sort((post1, post2) => (post1.title > post2.title ? 1 : -1))
  return posts
}

export const getAllPaths = () => {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    params: {
      slug: getPostBySlug(slug, ['slug']).slug,
    },
  }))
}
