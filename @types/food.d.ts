export type FoodData = {
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
  }
  servings: number
  ingredients: string[]
  tags: string[]
}

export type Food = FoodData & {
  content: string
  slug: string
}
