import { AppProps } from 'next/app'
import '../styles/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp
