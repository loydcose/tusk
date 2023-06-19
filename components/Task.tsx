import { Task } from "@/types"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import { useState } from "react"

type PropTypes = {
  task: Task
}

export default function Task({ task }: PropTypes) {
  const [hidden, setHidden] = useState(false)

  return (
    <div
      className={`${
        hidden && "hidden"
      } border border-input rounded-lg cursor-grab hover:bg-muted/[.35] transition-colors`}
    >
      {!task.isEditing ? (
        <TaskList task={task} setHidden={setHidden} />
      ) : (
        <TaskForm task={task} />
      )}
    </div>
  )
}
