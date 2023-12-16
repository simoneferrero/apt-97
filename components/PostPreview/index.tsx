import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string
  coverImage: string
  slug: string
  favourite?: boolean
}

const articleStyles = classNames(
  'aspect-square',
  'bg-background',
  'duration-300',
  'hover:shadow-lg',
  'overflow-hidden',
  'relative',
  'rounded-xl',
  'transition-all',
)

const titleStyles = classNames(
  '-translate-x-1/2',
  'absolute',
  'bg-opacity-75',
  'bg-white',
  'bottom-3',
  'font-body',
  'font-bold',
  'left-1/2',
  'px-2',
  'py-4',
  'rounded-xl',
  'text-center',
  'text-theme',
  'text-xl',
  'w-11/12',
)
const favouriteContainerStyles = classNames(
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

const PostPreview = ({ title, coverImage, slug, favourite }: Props) => {
  const { pathname } = useRouter()

  return (
    <Link as={`${pathname}/${slug}`} href={`${pathname}/[slug]`}>
      <a>
        <article className={articleStyles}>
          <Image
            src={coverImage}
            alt="A picture of this recipe"
            height="100%"
            width="100%"
            objectFit="cover"
            layout="responsive"
          />
          {favourite ? (
            <div className={favouriteContainerStyles}>
              <FontAwesomeIcon
                className="fa-xl"
                aria-label="favourite"
                icon={faStar}
              />
            </div>
          ) : null}
          <div className={titleStyles}>{title.toUpperCase()}</div>
        </article>
      </a>
    </Link>
  )
}

export default PostPreview
