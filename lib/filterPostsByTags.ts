import type { TagsType } from '../types/tags'
import type { PostType } from '../types/post'

export const filterPostsByTags = (posts: PostType[], pageTags: TagsType) =>
  Object.values(pageTags).filter(Boolean).length
    ? posts.filter(({ tags }) => tags.some((tag) => pageTags[tag]))
    : posts
