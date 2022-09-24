import PostsContainer from '../../components/PostsContainer'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'

type Props = {
  recipes: Post[]
}

const DrinksHome = ({ recipes }: Props) => {
  return (
    <>
      <Head>
        <title>Our Drinks | Apt.97</title>
      </Head>
      <PostsContainer recipes={recipes} />
    </>
  )
}

export default DrinksHome

export const getStaticProps = async () => {
  const recipes = getAllPosts('_drinks')

  return {
    props: { recipes },
  }
}
