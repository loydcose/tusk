import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Task from "./Task"
import UpdateTask from "./UpdateTask"
import { Board } from "@/types"

type PropTypes = {
  board: Board
}

export default function Board({ board }: PropTypes) {
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
          {board.tasks.length}
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        {board.tasks.map((task) => (
          <div
            key={task.id}
            className="border border-input rounded-lg cursor-grab hover:bg-muted/[.35] transition-colors"
          >
            {!task.isEditing ? (
              <Task board={board} task={task} />
            ) : (
              <UpdateTask board={board} task={task} />
            )}
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-2 w-full text-ring"
      >
        <Plus className="w-4 h-4" /> New
      </Button>
    </div>
  )
}
