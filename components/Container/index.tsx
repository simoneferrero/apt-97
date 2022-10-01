import classNames from 'classnames'

type Props = {
  children?: React.ReactNode
}

const containerStyles = classNames(
  'grid',
  'max-w-5xl',
  'mx-auto',
  'my-0',
  'p-8',
  'pb-0',
  'relative',
  'xl:px-0',
)

const Container = ({ children }: Props) => {
  return <div className={containerStyles}>{children}</div>
}

export default Container
