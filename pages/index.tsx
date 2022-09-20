import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import foodPic from '../public/images/food.jpg'
import cocktailPic from '../public/images/cocktail.jpg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUtensils,
  faMartiniGlassCitrus,
} from '@fortawesome/free-solid-svg-icons'

type IconProps = {
  type: 'food' | 'drinks'
  show: 'portrait' | 'landscape' | 'always'
}
const Icon = ({ type, show }: IconProps) => (
  <span
    className={`${
      show === 'landscape'
        ? 'portrait:!hidden'
        : show === 'portrait'
        ? 'landscape:!hidden'
        : ''
    } text-7xl`}
  >
    <FontAwesomeIcon
      icon={type === 'food' ? faUtensils : faMartiniGlassCitrus}
    />
  </span>
)

const Home = () => {
  return (
    <>
      <Head>
        <title>My Recipe Book</title>
      </Head>
      <header>
        <h1 className="absolute w-full pt-16 pb-16 text-7xl md:text-8xl font-bold font-cursive tracking-tighter leading-tight text-center select-none pointer-events-none z-40 text-teal-400 drop-shadow-lg drop-shadow-title">
          My Recipe Book
        </h1>
      </header>
      <Container>
        <Link href="/food">
          <a className="absolute top-0 left-0 landscape:h-full landscape:w-1/2 portrait:h-1/2 portrait:w-full overflow-hidden z-0">
            <div className="w-full h-full absolute top-0 left-0 transition ease-in-out delay-250 opacity-60 hover:scale-125 hover:opacity-100">
              <Image
                src={foodPic}
                alt="Picture of a plate of pancakes"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col landscape:w-full landscape:h-screen portrait:w-screen portrait:h-full items-center landscape:justify-end portrait:justify-start select-none pointer-events-none text-center z-40 text-teal-700 drop-shadow-lg drop-shadow-title landscape:pb-7">
              <Icon type="food" show="landscape" />
              <h2 className="relative w-full pt-8 pb-8 text-7xl md:text-7xl font-bold font-body tracking-tighter leading-tight">
                Our food
              </h2>
              <Icon type="food" show="portrait" />
            </div>
          </a>
        </Link>
        <Link href="/drinks">
          <a className="absolute landscape:top-0 landscape:right-0 landscape:h-full landscape:w-1/2 portrait:top-1/2 portrait:left-0 portrait:h-1/2 portrait:w-full overflow-hidden z-0">
            <div className="w-full h-full absolute top-0 left-0 transition ease-in-out delay-250 opacity-60 hover:scale-125 hover:opacity-100">
              <Image
                src={cocktailPic}
                alt="Picture of a Blue Lagoon cocktail"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col landscape:w-full landscape:h-screen portrait:w-screen portrait:h-full items-center justify-end select-none pointer-events-none text-center z-40 text-teal-700 drop-shadow-lg drop-shadow-title landscape:pb-7">
              <Icon type="drinks" show="always" />
              <h2 className="relative w-full pt-8 pb-8 text-7xl md:text-7xl font-bold font-body tracking-tighter leading-tight">
                Our drinks
              </h2>
            </div>
          </a>
        </Link>
      </Container>
    </>
  )
}
export default Home
