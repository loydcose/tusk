import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import priorities from "@/app/data/priorities"
import { useEffect, useRef, useState } from "react"
import { Board, Priority, Task } from "@/types"
import PriorityCircle from "./PriorityCircle"
import HandleBlur from "./layouts/HandleBlur"
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

type PropTypes = {
  task: Task
}

export default function UpdateTask({ task }: PropTypes) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(task?.title)
  const [selectedPriority, setSelectedPriority] = useState<Priority>(
    priorities.find((priority) => priority.id === task.priority)!
  )!
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelect = (id: string) => {
    const priority = priorities.find((priority) => {
      return priority.id === id
    })
    setSelectedPriority(priority!)
    setOpen(false)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select()
    }
  }, [])

  return (
    <HandleBlur task={task} selectedPriority={selectedPriority} title={title}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={inputRef}
          type="text"
          id="title"
          placeholder="Title"
        />
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
              <PriorityCircle color={selectedPriority.id} />
              <span>{selectedPriority.title}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-32" side="right" align="start">
            <Command>
              <CommandList>
                <CommandGroup>
                  {priorities.map((priority) => (
                    <CommandItem
                      key={priority.id}
                      onSelect={handleSelect}
                      className="flex items-center gap-3"
                    >
                      <PriorityCircle color={priority.id} />
                      <span>{priority.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </HandleBlur>
  )
}
