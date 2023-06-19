import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Board, Task as TaskType } from "@/types"
import { addTasks } from "@/redux/features/boards/kanbanSlice"
import { useAppDispatch } from "@/redux/hooks"
import Task from "./Task"

type PropTypes = {
  board: Board
  tasks: TaskType[]
}

export default function Board({ board, tasks }: PropTypes) {
  const dispatch = useAppDispatch()

  const handleAddTask = () => {
    dispatch(addTasks({ boardId: board.id }))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-sm text-muted-foreground">
          {board.title}
        </h2>
        <Badge
          variant="secondary"
          className="text-muted-foreground w-6 h-6 flex items-center justify-center"
        >
          {tasks.length}
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <Button
        onClick={handleAddTask}
        variant="ghost"
        className="flex items-center justify-start gap-2 w-full text-ring"
      >
        <Plus className="w-4 h-4" /> New
      </Button>
    </div>
  )
}
