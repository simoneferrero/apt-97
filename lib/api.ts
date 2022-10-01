import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type { PostDataType } from '../types/post'
import type { Directory } from '../types/directory'
import { PostType } from '../types/post'
import { TagsType } from '../providers/TagsProvider'

const DEFAULT_COVER_IMAGE_NAME = 'cover.jpg'

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
  const coverImage = join(
    '/images',
    directory,
    realSlug,
    data?.coverImage || DEFAULT_COVER_IMAGE_NAME,
  )

  return {
    ...(data as PostDataType),
    content,
    coverImage,
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

export const getTagsFromPosts = (posts: PostType[]): TagsType => {
  const tags = Array.from(
    new Set(
      posts.reduce((allTags: string[], post) => [...allTags, ...post.tags], []),
    ),
  )

  return tags.reduce((allTags, tag) => ({ ...allTags, [tag]: false }), {})
}
