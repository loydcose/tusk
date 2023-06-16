import { FocusEventHandler, ReactNode, Ref, useEffect, useRef } from "react"
import { setTaskEditing, updateTask } from "@/redux/features/boards/boardSlice"
import { useAppDispatch } from "@/redux/hooks"
import { Board, Priority, Task } from "@/types"

type PropTypes = {
  children: ReactNode
  board: Board
  task: Task
  selectedPriority: Priority
  title: string
}

export default function HandleBlur({
  children,
  board,
  task,
  selectedPriority,
  title,
}: PropTypes) {
  const dispatch = useAppDispatch()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hasNoChanges =
    task.title === title && task.priority === selectedPriority.id
  const ids = { boardId: board.id, taskId: task.id }

  const closeForm = () => {
    dispatch(setTaskEditing({ ...ids, isEditing: false }))
  }

  // todo: just pass props, no need to specify isEditing 
  // fix this readability

  const updateChanges = () => {
    dispatch(
      updateTask({
        ...ids,
        title: title.trim(),
        priority: selectedPriority.id,
      })
    )
  }

  const handleBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    const target = e.relatedTarget
    const parent = e.currentTarget
    const isDialog = target?.getAttribute("role") === "dialog"
    if (parent.contains(target) || isDialog) return
    if (hasNoChanges) {
      closeForm()
    } else {
      updateChanges()
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
