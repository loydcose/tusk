import { Action, State } from "@/types"

export default function setTaskEditing(state: State, action: Action) {
  const { boardId, taskId, isEditing } = action.payload

  return state.value.map((board) => {
    if (board.id === boardId) {
      const newTasks = board.tasks.map((task) => {
        if (task.id === taskId) return { ...task, isEditing }
        else return task
      })
      return { ...board, tasks: newTasks }
    } else {
      return board
    }
  })
}
