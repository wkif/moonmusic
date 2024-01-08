// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react'
import { MdiWhiteBalanceSunny, MdiWeatherNight } from './icon'

export default function Darkmode(): JSX.Element {
  let x = 0
  let y = 0
  let endRadius = 0
  const [isDark, setIsDark] = React.useState(false)
  const toggleTheme = (event: MouseEvent): void => {
    x = event.clientX
    y = event.clientY
    endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    setIsDark(!isDark)
    changeTheme()
  }
  const changeTheme = (): void => {
    const transition = document.startViewTransition(() => {
      const root = document.body
      // isDark.value = root.classList.contains('dark')
      root.classList.remove(isDark ? 'dark' : 'light')
      root.classList.add(isDark ? 'light' : 'dark')
    })
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
        }
      )
    })
  }
  useEffect(() => {
    return () => {
      changeTheme()
    }
  }, [])
  return (
    <>
      {isDark ? (
        <MdiWhiteBalanceSunny onClick={toggleTheme} />
      ) : (
        <MdiWeatherNight onClick={toggleTheme} />
      )}
    </>
  )
}
