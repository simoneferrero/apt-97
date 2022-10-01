import Head from 'next/head'

const TITLE = 'Apt.97'
const DESCRIPTION = 'A collection of our favourite recipes and drinks.'
const THEME_COLOR = '#2B5292'
const DOMAIN = 'https://apt-97.vercel.app'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={THEME_COLOR}
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link
        rel="manifest"
        href="/app/manifest.json"
        crossOrigin="use-credentials"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={TITLE} />
      <meta name="application-name" content={TITLE} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PWA App" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content="PWA App" />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:image" content="/public/logos/logo-bg-light.png" />
    </Head>
  )
}

export default Meta
