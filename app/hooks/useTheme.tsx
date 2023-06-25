import { selectKanban } from "@/redux/features/boards/kanbanSlice"
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"

export default function useTheme() {
  const kanban = useAppSelector(selectKanban)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const { documentElement } = document
    
    if (kanban.theme === "dark") {
      setIsDarkMode(true)
      documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      documentElement.classList.remove("dark")
    }
  }, [kanban.theme])

  return { isDarkMode }
}
