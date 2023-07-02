import { selectKanban } from "@/redux/features/boards/kanbanSlice"
import { useAppSelector } from "@/redux/hooks"
import { ReactElement, useEffect, useState } from "react"
import { useSystemTheme } from "@/app/hooks/useSystemTheme"

type ThemeProps = {
  id: number
  name: string
  value: string
  icon: ReactElement
}

export default function useTheme(themes: ThemeProps[]) {
  const kanban = useAppSelector(selectKanban)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [displayIcon, setDisplayIcon] = useState(themes[0].icon)
  const isSystemDark = useSystemTheme()
  
  const darkTheme = () => {
    const { documentElement } = document
    setIsDarkMode(true)
    documentElement.classList.add("dark")
    setDisplayIcon(themes[1].icon)
  }
  
  const lightTheme = () => {
    const { documentElement } = document
    setIsDarkMode(false)
    documentElement.classList.remove("dark")
    setDisplayIcon(themes[0].icon)
  }

  useEffect(() => {
    switch (kanban.theme) {
      case "dark":
        darkTheme()
        break
      case "light":
        lightTheme()
        break
      case "system":
        isSystemDark ? darkTheme() : lightTheme()
    }
  }, [kanban.theme, isSystemDark])

  return { isDarkMode, displayIcon }
}
