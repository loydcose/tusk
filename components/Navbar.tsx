import Logo from "@/svg/Logo"
import { Switch } from "@/components/ui/switch"
import { useAppDispatch } from "@/redux/hooks"
import { setTheme } from "@/redux/features/boards/kanbanSlice"
import useTheme from "@/app/hooks/useTheme"

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { isDarkMode } = useTheme()

  const handleSwitch = (isChecked: boolean) => {
    if (isChecked) {
      dispatch(setTheme({ theme: "dark" }))
    } else {
      dispatch(setTheme({ theme: "light" }))
    }
  }

  return (
    <>
      <nav>
        <h1 className="flex items-center gap-2 mb-2">
          <Logo isDarkMode={isDarkMode} />
          <span className="text-2xl font-semibold">Tusk</span>
        </h1>
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <p className="text-muted-foreground">Your minimalist task manager.</p>
          <div className="flex gap-3 items-center">
            <span className="text-muted-foreground">Dark Mode</span>
            <Switch onCheckedChange={handleSwitch} checked={isDarkMode} />
          </div>
        </div>
      </nav>
      <hr className="mb-8" />
    </>
  )
}
