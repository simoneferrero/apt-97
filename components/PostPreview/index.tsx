import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type Props = {
  title: string
  coverImage: string
  slug: string
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

const PostPreview = ({ title, coverImage, slug }: Props) => {
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
          <div className={titleStyles}>{title.toUpperCase()}</div>
        </article>
      </a>
    </Link>
  )
}

export default PostPreview
