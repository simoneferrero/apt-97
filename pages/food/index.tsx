import PostsContainer from '../../components/PostsContainer'
import { getAllPosts, getTagsFromPosts } from '../../lib/api'
import Head from 'next/head'
import { PostType } from '../../types/post'
import Modal from '../../components/Modal'
import { useTagsContext } from '../../providers/TagsProvider'
import { useEffect } from 'react'
import { filterPostsByTags } from '../../lib/filterPostsByTags'
import { GetStaticProps } from 'next'
import type { TagsType } from '../../types/tags'

type Props = {
  recipes: PostType[]
  tags: TagsType
}

const FoodHome = ({ recipes, tags }: Props) => {
  const { foodTags, setFoodTags } = useTagsContext()

  useEffect(() => {
    if (Object.keys(foodTags).length === 0) {
      setFoodTags(tags)
    }
  }, [])

  const filteredRecipes = filterPostsByTags(recipes, foodTags)

  return (
    <>
      <Head>
        <title>Our Food | Apt.97</title>
      </Head>
      <PostsContainer recipes={filteredRecipes} />
      <Modal tags={foodTags} setTags={setFoodTags} />
    </>
  )
}

export default FoodHome

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = getAllPosts('_food')
  const tags = getTagsFromPosts(recipes)

  return {
    props: { recipes, tags },
  }
}
