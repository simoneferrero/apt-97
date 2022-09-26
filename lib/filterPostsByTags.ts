import { TagsType } from '../providers/TagsProvider'
import PostType from '../interfaces/post'

export const filterPostsByTags = (posts: PostType[], pageTags: TagsType) =>
  posts.filter(({ tags }) => tags.some((tag) => pageTags[tag]))
