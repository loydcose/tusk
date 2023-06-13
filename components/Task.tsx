import { MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, Trash } from "lucide-react"
import priorityColor from "@/lib/priorityColor"
import { Button } from "./ui/button"
import { Task } from "@/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  deleteTask,
  selectBoards,
  setTaskEditing,
} from "@/redux/features/boardsSlice"

type PropTypes = {
  task: Task
}

export default function Task({ task }: PropTypes) {
  const boards = useAppSelector(selectBoards)
  const dispatch = useAppDispatch()

  return (
    <div className="flex gap-2 py-2 pr-2 pl-3">
      <div
        style={{
          backgroundColor: priorityColor(task?.priority),
        }}
        className="h-3 w-3 rounded-full shrink-0 mt-3"
      ></div>
      <p className="mt-[6px]">{task?.title}</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="ghost" className="ml-auto">
            <MoreVertical className="w-5 h-5 text-mute-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuItem onClick={() => dispatch(setTaskEditing())}>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(deleteTask())}>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
