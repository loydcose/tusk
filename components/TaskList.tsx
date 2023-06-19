import { ArrowLeftRight, MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { Task } from "@/types"
import { boards } from "@/app/data/data"
import { Dispatch } from "react"
import useTask from "@/app/hooks/useTask"
import PriorityCircle from "./PriorityCircle"

type PropTypes = {
  task: Task
  setHidden: Dispatch<boolean>
}

export default function TaskList({ task, setHidden }: PropTypes) {
  const { handleMove, handleDelete, handleDropdown } = useTask(setHidden, task)

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
        <DropdownMenuContent className="w-36">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              <span>Move to</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {boards.map((board) => (
                  <DropdownMenuItem
                    onClick={() => handleMove(board.id)}
                    key={board.id}
                  >
                    <span>{board.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem onClick={handleDropdown}>
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
