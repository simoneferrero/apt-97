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
  'absolute',
  'bg-opacity-75',
  'bg-white',
  'bottom-0',
  'font-body',
  'font-bold',
  'left-0',
  'lg:py-6',
  'lg:text-xl',
  'md:py-8',
  'md:text-2xl',
  'px-3',
  'py-9',
  'rounded-xl',
  'text-3xl',
  'text-center',
  'text-theme',
  'w-full',
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
