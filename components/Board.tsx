import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Board, Task as TaskType } from "@/types"
import { addTasks } from "@/redux/features/boards/kanbanSlice"
import { useAppDispatch } from "@/redux/hooks"
import Task from "./Task"
import { Droppable } from "react-beautiful-dnd"

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
          className={`${
            tasks.length > 0 ? "opacity-100" : "opacity-0"
          } text-muted-foreground w-6 h-6 flex items-center justify-center`}
        >
          {tasks.length}
        </Badge>
      </div>

      <Droppable key={board.id} droppableId={board.id.toString()}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${
              snapshot.isDraggingOver ? "hover:before:opacity-50" : "hover:before:opacity-0"
            } before:opacity-0 flex flex-col relative before:absolute before:bg-muted before:-inset-x-2 before:-top-2 before:bottom-0 before:rounded-lg`}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

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
