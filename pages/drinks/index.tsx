import PostsContainer from '../../components/PostsContainer'
import { getAllPosts, getTagsFromPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'
import { GetStaticProps } from 'next'
import { TagsType, useTagsContext } from '../../providers/TagsProvider'
import { useEffect } from 'react'
import { filterPostsByTags } from '../../lib/filterPostsByTags'
import Modal from '../../components/Modal'

type Props = {
  recipes: Post[]
  tags: TagsType
}

const DrinksHome = ({ recipes, tags }: Props) => {
  const { drinksTags, setDrinksTags } = useTagsContext()

  useEffect(() => {
    if (Object.keys(drinksTags).length === 0) {
      setDrinksTags(tags)
    }
  }, [])

  const filteredRecipes = filterPostsByTags(recipes, drinksTags)

  return (
    <>
      <Head>
        <title>Our Drinks | Apt.97</title>
      </Head>
      <PostsContainer recipes={filteredRecipes} />
      <Modal tags={drinksTags} setTags={setDrinksTags} />
    </>
  )
}

export default DrinksHome

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = getAllPosts('_drinks')
  const tags = getTagsFromPosts(recipes)

  return {
    props: { recipes, tags },
  }
}
