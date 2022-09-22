import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type { FoodData } from '../@types/food'
import type { Directory } from '../@types/directory'

const postsDirectory = (directory: Directory) => join(process.cwd(), directory)

export const getPostSlugs = (directory: Directory) => {
  return fs.readdirSync(postsDirectory(directory))
}

export const getRealSlug = (slug: string) => slug.replace(/\.md$/, '')

export const getPostBySlug = (slug: string, directory: Directory) => {
  const realSlug = getRealSlug(slug)
  const fullPath = join(postsDirectory(directory), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    ...(data as FoodData),
    content,
    slug: realSlug,
  }
}

export const getAllPosts = (directory: Directory) => {
  const slugs = getPostSlugs(directory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, directory))
    // sort posts alphabetically
    .sort((post1, post2) => (post1.title > post2.title ? 1 : -1))
  return posts
}

export const getAllPaths = (directory: Directory) => {
  const slugs = getPostSlugs(directory)

  return slugs.map((slug) => ({
    params: {
      slug: getRealSlug(slug),
    },
  }))
}
