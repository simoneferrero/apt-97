import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logos/logo-blue.png'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const appBarContainerStyles = classNames(
  'bg-background',
  'flex',
  'items-center',
  'justify-center',
  'max-w-5xl',
  'mx-auto',
  'sticky',
  'top-0',
  'z-50',
)
const appBarStyles = (isHomepage: boolean) =>
  classNames(
    'border-b-2',
    'border-theme',
    'flex',
    'font-body',
    'font-bold',
    'items-center',
    'justify-between',
    'md:text-3xl',
    'mx-8',
    'text-center',
    'text-theme',
    'text-xl',
    'xl:mx-0',
    'w-full',
    {
      'border-transparent': isHomepage,
    },
  )
const linkContainerStyles = (linkPosition: 'left' | 'center' | 'right') =>
  classNames('flex', 'flex-1', {
    'justify-start': linkPosition === 'left',
    'justify-center': linkPosition === 'center',
    'justify-end': linkPosition === 'right',
  })
const textualLinkStyles = (active?: boolean) =>
  classNames('hover:underline', 'leading-7', 'relative', {
    underline: active,
  })
const homeLogoContainerStyles = classNames(
  'flex',
  'items-center',
  'justify-center',
  textualLinkStyles(),
)
const cursiveStyles = classNames('font-cursive', 'text-xl', 'font-medium')

const AppBar: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <header className={appBarContainerStyles}>
      <div className={appBarStyles(pathname === '/')}>
        <div className={linkContainerStyles('left')}>
          <Link as="/food" href="/food">
            <a className={textualLinkStyles(pathname.includes('/food'))}>
              <span className={cursiveStyles}>Our</span>
              <br />
              <span>FOOD</span>
            </a>
          </Link>
        </div>
        <div className={linkContainerStyles('center')}>
          <Link as="/" href="/" aria-label="Home" passHref>
            <a>
              <div className={homeLogoContainerStyles}>
                <Image
                  src={logo}
                  alt="The logo of the website"
                  height="100%"
                  width="100%"
                  priority={true}
                  placeholder="blur"
                  objectFit="contain"
                  layout="fixed"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={linkContainerStyles('right')}>
          <Link as="/drinks" href="/drinks">
            <a className={textualLinkStyles(pathname.includes('/drinks'))}>
              <span className={cursiveStyles}>Our</span>
              <br />
              <span>DRINKS</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default AppBar
