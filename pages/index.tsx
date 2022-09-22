import Head from 'next/head'
import Image from 'next/image'
import heroPic from '../public/images/spaghetti-carbonara.png'
import logo from '../public/logos/logo-white.png'
import classNames from 'classnames'

const containerStyles = classNames('bg-theme', 'w-screen')
const imageWrapperStyles = classNames(
  '-translate-x-1/2',
  '-translate-y-1/2',
  'absolute',
  'landscape:h-40',
  'landscape:w-40',
  'left-1/2',
  'md:landscape:h-72',
  'md:landscape:w-72',
  'md:portrait:h-96',
  'md:portrait:w-96',
  'portrait:h-52',
  'portrait:w-52',
  'top-1/2',
  'transform',
)

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Apt.97</title>
      </Head>
      <div className={containerStyles}>
        <Image
          src={heroPic}
          alt="A delicious plate of spaghetti alla carbonara"
          priority={true}
          placeholder="blur"
          objectFit="cover"
          layout="fill"
        />
        <div className={imageWrapperStyles}>
          <Image
            src={logo}
            alt="The logo of the website"
            width="100%"
            height="100%"
            priority={true}
            placeholder="blur"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </>
  )
}
export default Home
