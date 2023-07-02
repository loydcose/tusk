import { FocusEventHandler, ReactNode, useEffect, useRef } from "react"
import { updateTask } from "@/redux/features/boards/kanbanSlice"
import { useAppDispatch } from "@/redux/hooks"
import { Priority, Task } from "@/types"

type PropTypes = {
  children: ReactNode
  task: Task
  selectedPriority: Priority
  title: string
}

export default function HandleBlur({
  children,
  task,
  selectedPriority,
  title,
}: PropTypes) {
  const dispatch = useAppDispatch()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hasChanges =
    task.title !== title || task.priority !== selectedPriority.id

  const handleBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    const target = e.relatedTarget
    const parent = e.currentTarget
    const isDialog = target?.getAttribute("role") === "dialog"
    if (parent.contains(target) || isDialog) return

    if (hasChanges) {
      dispatch(
        updateTask({
          title: title.trim(),
          taskId: task.id,
          priority: selectedPriority.id,
          isEditing: false,
          updatedAt: new Date()
        })
      )
    } else {
      dispatch(updateTask({ taskId: task.id, isEditing: false }))
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus()
    }
  }, [])

  return (
    <div
      onBlur={handleBlur}
      ref={containerRef}
      tabIndex={0}
      className="p-3 focus:outline-none"
    >
      {children}
    </div>
  )
}
