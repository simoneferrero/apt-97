import { getPostBySlug, getAllPaths } from '../../lib/api'
import Post from '../../components/Post'
import markdownToHtml from '../../lib/markdownToHtml'
import { PostType } from '../../types/post'

type Props = {
  post: PostType
}

const FoodPost = ({ post }: Props) => {
  return <Post post={post} />
}

export default FoodPost

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, '_food')
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPaths('_food')

  return {
    paths,
    fallback: false,
  }
}
