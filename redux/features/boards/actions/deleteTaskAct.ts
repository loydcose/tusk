import { Action, State } from "@/types"

export default function deleteTaskAct(state: State, action: Action) {
  const { boardId, taskId } = action.payload

  return state.value.map((board) => {
    if (board.id === boardId) {
      const newTasks = board.tasks.filter((task) => {
        return task.id !== taskId
      })
      return { ...board, tasks: newTasks }
    } else {
      return board
    }
  })
}
