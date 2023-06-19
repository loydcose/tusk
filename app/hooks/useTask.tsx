import { useToast } from "@/components/ui/use-toast"
import { Dispatch, useRef } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { deleteTask, updateTask } from "@/redux/features/boards/kanbanSlice"
import { ToastAction } from "@/components/ui/toast"
import { Task } from "@/types"

export default function useTask(setHidden: Dispatch<boolean>, task: Task) {
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const durationRef = useRef<number | null>(null)

  const handleMove = (boardId: number) => {
    dispatch(updateTask({ taskId: task.id, boardId }))
  }

  const handleDropdown = () => {
    dispatch(
      updateTask({
        taskId: task.id,
        isEditing: true,
      })
    )
  }

  const clear = () => {
    if (durationRef.current) {
      clearTimeout(durationRef.current)
    }
  }

  const handleDelete = () => {
    clear()

    setHidden(true)
    toast({
      title: "Task Deleted",
      description: task.title,
      action: (
        <ToastAction onClick={handleUndo} altText="Undo">
          Undo
        </ToastAction>
      ),
    })

    durationRef.current = window.setTimeout(() => {
      console.log("deleted")
      dispatch(deleteTask({ taskId: task.id }))
    }, 5000)
  }

  const handleUndo = () => {
    console.log("undo")
    setHidden(false)
    clear()
  }

  return { handleMove, handleDelete, handleUndo, handleDropdown }
}
