import { useRouter } from 'next/router'
import Image from 'next/image'
import ErrorPage from 'next/error'
import Container from '../../components/Container'
import Head from 'next/head'
import type { PostType } from '../../types/post'
import markdownStyles from './index.module.css'
import classNames from 'classnames'
import EditButton from '../EditButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faGlassWater,
  faWineGlass,
  faWhiskeyGlass,
  faMartiniGlass,
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  post: PostType
}

const articleStyles = classNames('font-body', 'text-theme')
const noPostsStyles = classNames(
  'font-bold',
  'pt-8',
  'text-3xl',
  'text-center',
  'text-theme',
  'w-full',
)
const articleTitleStyles = classNames(
  'font-body',
  'font-bold',
  'md:text-3xl',
  'pb-6',
  'text-2xl',
  'text-center',
  'text-theme',
  'w-full',
)
const topSectionsContainerStyles = (hasIngredients: boolean) =>
  classNames('gap-4', 'grid', 'portrait:grid-cols-1', {
    'landscape:grid-cols-2': hasIngredients,
  })
const imageContainerStyles = (hasIngredients: boolean) =>
  classNames(
    'bg-background',
    'h-max',
    'overflow-hidden',
    'relative',
    'rounded-xl',
    {
      'landscape:w-1/2': !hasIngredients,
      'landscape:m-auto': !hasIngredients,
    },
  )
const servingsContainerStyles = classNames(
  'absolute',
  'bg-opacity-75',
  'bg-white',
  'flex',
  'font-bold',
  'font-body',
  'gap-3',
  'h-14',
  'items-center',
  'left-4',
  'md:text-lg',
  'px-3',
  'rounded-xl',
  'text-base',
  'text-theme',
  'top-4',
)
const glassContainerStyles = classNames(
  'absolute',
  'bg-opacity-75',
  'bg-white',
  'flex',
  'font-bold',
  'font-body',
  'gap-3',
  'h-14',
  'items-center',
  'justify-center',
  'md:text-lg',
  'px-4',
  'py-3',
  'right-4',
  'rounded-xl',
  'text-base',
  'text-theme',
  'top-4',
  'w-14',
)
const ingredientsSectionStyles = classNames(
  'border-2',
  'border-theme',
  'min-h-full',
  'p-4',
  'rounded-xl',
  'w-full',
)
const sectionTitleStyles = classNames('font-bold', 'font-cursive', 'text-2xl')
const ingredientsListStyles = classNames('list-disc', 'ml-6', 'pt-2')
const stepsSectionStyles = classNames('mx-auto', 'py-6')
const stepsTitleStyles = classNames(
  'font-bold',
  'font-cursive',
  'pb-4',
  'text-2xl',
)
const tagsSectionStyles = classNames(
  'border-2',
  'border-theme',
  'p-4',
  'rounded-xl',
  'w-full',
)
const lastModifiedStyles = classNames(
  'text-right',
  'pt-4',
  'font-body',
  'text-sm',
  'text-theme',
)

const glassTypes = {
  collins: {
    label: 'Collins',
    icon: faGlassWater,
  },
  wine: {
    label: 'Wine',
    icon: faWineGlass,
  },
  'old-fashioned': {
    label: 'Old Fashioned',
    icon: faWhiskeyGlass,
  },
  martini: {
    label: 'Martini',
    icon: faMartiniGlass,
  },
} as const

const Post = ({ post }: Props) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const hasServings = Boolean(post.servings)
  const hasGlass = Boolean(post.glass)
  const hasIngredients = Boolean(post.ingredients)

  const pageTitle = post.title ? `${post.title} | Apt.97` : 'Apt.97'

  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta
          property="og:image"
          content={post?.coverImage && post.coverImage}
        />
      </Head>
      {router.isFallback ? (
        <h2 className={noPostsStyles}>Loading...</h2>
      ) : (
        <article className={articleStyles}>
          <h1 className={articleTitleStyles}>{post.title.toUpperCase()}</h1>
          <div className={topSectionsContainerStyles(hasIngredients)}>
            <section className={imageContainerStyles(hasIngredients)}>
              <Image
                src={post.coverImage}
                alt="A picture of this recipe"
                height="100%"
                width="100%"
                objectFit="cover"
                layout="responsive"
              />
              {hasServings ? (
                <div className={servingsContainerStyles}>
                  <FontAwesomeIcon icon={faUser} />
                  <span aria-hidden>{post.servings}</span>
                </div>
              ) : null}
              {hasGlass ? (
                <div className={glassContainerStyles}>
                  <FontAwesomeIcon
                    className="fa-xl"
                    aria-label={`${glassTypes[post.glass].label} glass`}
                    icon={glassTypes[post.glass].icon}
                  />
                </div>
              ) : null}
            </section>
            {hasIngredients ? (
              <section className={ingredientsSectionStyles}>
                <h2 className={sectionTitleStyles}>Ingredients:</h2>
                <ul className={ingredientsListStyles}>
                  {post.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
          <section className={stepsSectionStyles}>
            <h2 className={stepsTitleStyles}>Steps:</h2>
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </section>
          <section className={tagsSectionStyles}>
            <span className={sectionTitleStyles}>Tags:</span>{' '}
            <span>{post.tags.join(', ')}</span>
          </section>
        </article>
      )}
      <EditButton />
      <p className={lastModifiedStyles}>
        Last modified: {new Date(post.date).toLocaleDateString('en-GB')}
      </p>
    </Container>
  )
}

export default Post
