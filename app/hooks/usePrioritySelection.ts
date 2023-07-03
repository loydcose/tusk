import { Dispatch, useState } from "react"
import priorities from "../data/priorities"
import { Priority, Task } from "@/types"

type PropTypes = {
  task: Task
  setOpen: Dispatch<boolean>
}

export default function usePrioritySelection({ task, setOpen }: PropTypes) {
  const [selectedPriority, setSelectedPriority] = useState<Priority>(
    priorities.find((priority) => priority.id === task.priority)!
  )!

  const handleSelect = (id: string) => {
    const priority = priorities.find((priority) => {
      return priority.id === id
    })
    setSelectedPriority(priority!)
    setOpen(false)
  }

  return { selectedPriority, handleSelect }
}
