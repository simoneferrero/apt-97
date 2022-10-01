import { TagsType } from '../providers/TagsProvider'
import PostType from '../interfaces/post'

export const filterPostsByTags = (posts: PostType[], pageTags: TagsType) =>
  Object.values(pageTags).filter(Boolean).length
    ? posts.filter(({ tags }) => tags.some((tag) => pageTags[tag]))
    : posts
