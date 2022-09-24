import PostsContainer from '../../components/PostsContainer'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'

type Props = {
  recipes: Post[]
}

const FoodHome = ({ recipes }: Props) => {
  return (
    <>
      <Head>
        <title>Our Food | Apt.97</title>
      </Head>
      <PostsContainer recipes={recipes} />
    </>
  )
}

export default FoodHome

export const getStaticProps = async () => {
  const recipes = getAllPosts('_food')

  return {
    props: { recipes },
  }
}
