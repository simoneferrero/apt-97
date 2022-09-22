import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logos/logo-blue.png'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const appBarContainerStyles = classNames(
  'bg-background',
  'flex',
  'font-body',
  'font-bold',
  'items-center',
  'justify-around',
  'md:text-3xl',
  'sticky',
  'text-center',
  'text-theme',
  'text-xl',
  'top-0',
  'w-full',
  'z-50',
)
const linkStyles = (active?: boolean) =>
  classNames(
    'landscape:w-24',
    'leading-7',
    'md:portrait:w-28',
    'portrait:w-20',
    'relative',
    {
      underline: active,
    },
  )
const homeLogoContainerStyles = classNames(
  'flex',
  'items-center',
  'justify-center',
  linkStyles(),
)
const cursiveStyles = classNames('font-cursive', 'text-xl', 'font-medium')

const AppBar: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <header className={appBarContainerStyles}>
      <Link href="/food" passHref>
        <a className={linkStyles(pathname.includes('/food'))}>
          <span className={cursiveStyles}>Our</span>
          <br />
          <span>FOOD</span>
        </a>
      </Link>
      <Link href="/" aria-label="Home" passHref>
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
      <Link href="/drinks" passHref>
        <a className={linkStyles(pathname === '/drinks')}>
          <span className={cursiveStyles}>Our</span>
          <br />
          <span>DRINKS</span>
        </a>
      </Link>
    </header>
  )
}

export default AppBar
