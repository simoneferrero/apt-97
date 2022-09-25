export type PostDataType = {
  author: string
  coverImage: string
  date: string
  excerpt: string
  ingredients: string[]
  servings: number
  tags: string[]
  title: string
}

export type PostType = PostDataType & {
  content: string
  slug: string
}
