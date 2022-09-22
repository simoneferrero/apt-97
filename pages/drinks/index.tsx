import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'

type Props = {
  recipes: Post[]
}

const FoodHome = ({ recipes }: Props) => {
  const [heroPost, ...morePosts] = recipes
  return (
    <>
      <Head>
        <title>Our Drinks</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  )
}

export default FoodHome

export const getStaticProps = async () => {
  const recipes = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { recipes },
  }
}
