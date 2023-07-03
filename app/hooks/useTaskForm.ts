import { updateTask } from "@/redux/features/boards/kanbanSlice"
import { useAppDispatch } from "@/redux/hooks"
import { Priority, Task } from "@/types"
import {
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
  useEffect,
} from "react"

type PropTypes = {
  task: Task
  title: string
  selectedPriority: Priority
  inputRef: RefObject<HTMLInputElement>
}

export default function useTaskForm({
  task,
  title,
  selectedPriority,
  inputRef,
}: PropTypes) {
  const dispatch = useAppDispatch()

  const handleOnBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    const target = e.relatedTarget
    const parent = e.currentTarget
    const isTargetPopover = target?.getAttribute("role") === "dialog"

    if (parent.contains(target) || isTargetPopover) return
    closeForm()
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      closeForm()
    }
  }

  const closeForm = () => {
    const hasChanges =
      task.title !== title || task.priority !== selectedPriority.id
    const isEmpty = title.trim() == ""

    if (hasChanges) {
      dispatch(
        updateTask({
          title: isEmpty ? "Untitled" : title.trim() ,
          taskId: task.id,
          priority: selectedPriority.id,
          isEditing: false,
          updatedAt: new Date(),
        })
      )
    } else {
      dispatch(updateTask({ taskId: task.id, isEditing: false }))
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current!.select()
    }
  }, [inputRef])

  return { closeForm, handleOnBlur, handleKeyDown }
}
