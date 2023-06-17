import Logo from "@/svg/Logo"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const { documentElement } = document

    if (isDarkMode) documentElement.classList.add("dark")
    else documentElement.classList.remove("dark")
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
            <Switch onCheckedChange={() => setIsDarkMode((prev) => !prev)} />
          </div>
        </div>
      </nav>
      <hr className="mb-8" />
    </>
  )
}
