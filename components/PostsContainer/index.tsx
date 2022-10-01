import Container from '../../components/Container'
import Post from '../../interfaces/post'
import PostPreview from '../../components/PostPreview'
import classNames from 'classnames'

type Props = {
  recipes: Post[]
}

const postsContainerStyles = classNames(
  'gap-y-8',
  'grid-cols-1',
  'grid',
  'lg:grid-cols-3',
  'md:gap-x-8',
  'md:gap-y-12',
  'md:grid-cols-2',
)
const noPostsStyles = classNames(
  'font-bold',
  'pt-8',
  'text-3xl',
  'text-theme',
  'text-center',
  'w-full',
)

const PostsContainer = ({ recipes }: Props) => {
  return (
    <Container>
      <section>
        {recipes.length ? (
          <div className={postsContainerStyles}>
            {recipes.map((post) => (
              <PostPreview key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <h2 className={noPostsStyles}>
            There are no results matching your filters, please try with a
            different one.
          </h2>
        )}
      </section>
    </Container>
  )
}

export default PostsContainer
