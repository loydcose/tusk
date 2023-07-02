import { useEffect, useState } from "react"

export const useSystemTheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isSystemDark, setIsSystemDark] = useState(true)

  const mqListener = (e: MediaQueryListEvent) => {
    setIsSystemDark(e.matches)
  }

  useEffect(() => {
    setIsSystemDark(getCurrentTheme)

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMq.addListener(mqListener)
    return () => darkThemeMq.removeListener(mqListener)
  }, [])
  return isSystemDark
}
