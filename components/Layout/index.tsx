import AppBar from '../AppBar'
import Meta from '../meta'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <AppBar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
