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

type PropTypes = {
  task: Task
}

export default function Task({ task }: PropTypes) {
  return (
    <div className="flex gap-2 py-1 px-3 hover:bg-muted cursor-grab transition-colors">
      <div
        style={{
          backgroundColor: priorityColor(task?.priority),
        }}
        className="h-3 w-3 rounded-full shrink-0 mt-[14px]"
      ></div>
      <p className="mt-2">{task?.title}</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="ghost" className="ml-auto">
            <MoreVertical className="w-5 h-5 text-mute-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
