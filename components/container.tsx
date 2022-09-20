type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="relative grid portrait:place-items-center h-screen">
      {children}
    </div>
  )
}

export default Container
