import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import useWindowSize from '../hooks/useWindowSize'
import { useState } from 'react'
import { TagsProvider, TagsType } from '../providers/TagsProvider'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [foodTags, setFoodTags] = useState<TagsType>({})
  const [drinksTags, setDrinksTags] = useState<TagsType>({})

  useWindowSize()

  const tagsContextValue = {
    foodTags,
    drinksTags,
    setFoodTags,
    setDrinksTags,
  }

  return (
    <TagsProvider value={tagsContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TagsProvider>
  )
}
export default MyApp
