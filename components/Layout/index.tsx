import AppBar from '../AppBar'
import Meta from '../meta'
import classNames from 'classnames'

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
      </div>
    </>
  )
}

export default Layout
