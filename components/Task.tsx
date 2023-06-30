import { Task } from "@/types"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"

type PropTypes = {
  task: Task
  index: number
}

export default function Task({ task, index }: PropTypes) {
  const [hidden, setHidden] = useState(false)

  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${
              hidden && "hidden"
            } border border-input rounded-lg cursor-grab hover:bg-muted/[.35] transition-colors bg-background mb-3 z-10`}
          >
            {!task.isEditing ? (
              <TaskList task={task} setHidden={setHidden} />
            ) : (
              <TaskForm task={task} />
            )}
          </div>
        )
      }}
    </Draggable>
  )
}
