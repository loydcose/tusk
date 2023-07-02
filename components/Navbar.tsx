import Logo from "@/svg/Logo"
import { useAppDispatch } from "@/redux/hooks"
import { setTheme } from "@/redux/features/boards/kanbanSlice"
import useTheme from "@/app/hooks/useTheme"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "./ui/button"
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command"
import { useState } from "react"
import { Laptop, Moon, Sun } from "lucide-react"

const themes = [
  {
    id: 1,
    name: "Light",
    value: "light",
    icon: <Sun />,
  },
  {
    id: 1,
    name: "Dark",
    value: "dark",
    icon: <Moon />,
  },
  {
    id: 1,
    name: "System",
    value: "system",
    icon: <Laptop />,
  },
]

export default function Navbar() {
  const dispatch = useAppDispatch()
  const { isDarkMode, displayIcon } = useTheme(themes)
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string) => {
    dispatch(setTheme({ theme: value }))
    setOpen(false)
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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="px-3">
                <span className="w-5 h-5 opacity-75 flex items-center justify-center">
                  {displayIcon}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-32" side="bottom" align="end">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {themes.map((theme) => (
                      <CommandItem
                        key={theme.id}
                        onSelect={handleSelect}
                        className="flex items-center gap-3"
                      >
                        <span className="w-4 h-4 opacity-50 flex items-center justify-center">
                          {theme.icon}
                        </span>
                        <span>{theme.name}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <hr className="mb-8" />
    </>
  )
}
