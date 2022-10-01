import AppBar from '../AppBar'
import Footer from '../Footer'
import Meta from '../Meta'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="full-height">
        <AppBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
