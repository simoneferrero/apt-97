import { useState, useEffect } from 'react'

interface Size {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      const height = window.innerHeight
      const width = window.innerWidth

      setWindowSize({
        height,
        width,
      })

      document.documentElement.style.setProperty('--vh', `${height}px`)
      document.documentElement.style.setProperty('--vw', `${width}px`)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
