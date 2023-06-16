import { MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { Board, Task } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { deleteTask, setTaskEditing } from "@/redux/features/boards/boardSlice"
import PriorityCircle from "./PriorityCircle"
import { useToast } from "./ui/use-toast"
import { ToastAction } from "./ui/toast"

type PropTypes = {
  board: Board
  task: Task
}

export default function Task({ board, task }: PropTypes) {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const handleClick = () => {
    dispatch(
      setTaskEditing({
        boardId: board.id,
        taskId: task.id,
        isEditing: true,
      })
    )
  }

  const handleDelete = () => {
    dispatch(deleteTask({ boardId: board.id, taskId: task.id }))
    toast({
      title: "Task Deleted",
      description: task.title,
      action: (
        <ToastAction onClick={handleUndo} altText="Undo">
          Undo
        </ToastAction>
      ),
    })
  }

  const handleUndo = () => {
    console.log("undo deleted file!")
  }

  return (
    <div className="flex gap-2 py-2 pr-2 pl-3">
      <PriorityCircle color={task.priority} className="mt-3" />
      <p className="mt-[6px]">{task?.title}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="ghost" className="ml-auto">
            <MoreVertical className="w-5 h-5 text-mute-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuItem onClick={handleClick}>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
