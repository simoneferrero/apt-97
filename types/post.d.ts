export type PostFrontmatterType = {
  author: string
  coverImage: string
  date: string
  excerpt: string
  glass?: GlassType
  ingredients?: string[]
  servings?: string
  tags: string[]
  title: string
}

export type PostType = PostFrontmatterType & {
  content: string
  slug: string
}

export type GlassType = 'collins' | 'martini' | 'wine' | 'old-fashioned'
