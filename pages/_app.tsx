import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import useWindowSize from '../hooks/useWindowSize'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  useWindowSize()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
