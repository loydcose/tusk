import Logo from "@/svg/Logo"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { getData, setData } from "@/lib/dataStorage"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(getData().theme === "dark")

  useEffect(() => {
    const { documentElement } = document
    if (isDarkMode) {
      documentElement.classList.add("dark")
      setData({ theme: "dark" })
    } else {
      documentElement.classList.remove("dark")
      setData({ theme: "light" })
    }
  }, [isDarkMode])

  return (
    <>
      <nav>
        <h1 className="flex items-center gap-3 mb-2">
          <Logo isDarkMode={isDarkMode} />
          <span className="text-2xl font-semibold">Tusk</span>
        </h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">Your minimalist task manager.</p>
          <div className="flex gap-3 items-center">
            Dark Mode
            <Switch
              onCheckedChange={() => setIsDarkMode((prev) => !prev)}
              checked={isDarkMode}
            />
          </div>
        </div>
      </nav>
      <hr className="mb-8" />
    </>
  )
}
