import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import priorityColor from "@/lib/priorityColor"
import priorities from "@/app/data/priorities"
import { useState } from "react"
import { Priority, Task } from "@/types"
import { updateTask } from "@/redux/features/boardsSlice"
import { useAppDispatch } from "@/redux/hooks"

type PropTypes = {
  task: Task
}

export default function UpdateTask({ task }: PropTypes) {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState<Priority | null>(
    null
  )

  const handleSelect = (id: string) => {
    const priority =
      priorities.find((priority) => {
        return priority.id === id
      }) || null

    setSelectedPriority(priority)
    setOpen(false)
    dispatch(updateTask())
  }

  return (
    <div className="p-3">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input value={task?.title} type="text" id="title" placeholder="Title" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="title" className="mt-4">
          Priority
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-[150px] justify-start flex items-center gap-3"
            >
              {selectedPriority ? (
                <>
                  <div
                    style={{
                      backgroundColor: priorityColor(selectedPriority.id),
                    }}
                    className="h-3 w-3 rounded-full"
                  ></div>
                  <span>{selectedPriority.title}</span>
                </>
              ) : (
                <>Select priority</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandList>
                <CommandGroup>
                  {priorities.map((priority) => (
                    <CommandItem
                      key={priority.id}
                      onSelect={handleSelect}
                      className="flex items-center gap-3"
                    >
                      <div
                        style={{
                          backgroundColor: priorityColor(priority.id),
                        }}
                        className="h-3 w-3 rounded-full"
                      ></div>
                      <span>{priority.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
