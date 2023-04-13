import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    const debouncedHandleResize = debounce(handleResize, 300)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])
  return width
}
