import { Action, State } from "@/types"

export default function updateTaskAct(state: State, action: Action) {
  const { boardId, taskId, title, priority } = action.payload
  return (state.value = state.value.map((board) => {
    if (board.id === boardId) {
      const newTasks = board.tasks.map((task) => {
        if (task.id === taskId) return { ...task, isEditing: false, title, priority }
        else return task
      })
      return { ...board, tasks: newTasks }
    } else {
      return board
    }
  }))
}
