import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import priorities from "@/app/data/priorities"
import { useRef, useState } from "react"
import { Task } from "@/types"
import PriorityCircle from "./PriorityCircle"
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
import useTaskForm from "@/app/hooks/useTaskForm"
import usePrioritySelection from "@/app/hooks/usePrioritySelection"

type PropTypes = {
  task: Task
}

export default function TaskForm({ task }: PropTypes) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(task.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { selectedPriority, handleSelect } = usePrioritySelection({
    task,
    setOpen,
  })
  const { closeForm, handleOnBlur, handleKeyDown } = useTaskForm({
    task,
    title,
    selectedPriority,
    inputRef,
  })

  return (
    <div
      onBlur={handleOnBlur}
      ref={containerRef}
      tabIndex={0}
      className="p-3 focus:ring focus:ring-red-600"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          onKeyDown={handleKeyDown}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={inputRef}
          maxLength={128}
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
          <PopoverContent
            className="p-0 w-32"
            side="right"
            align="start"
            onCloseAutoFocus={() => closeForm()}
          >
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
    </div>
  )
}
