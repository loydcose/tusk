import { boards, tasks } from "@/app/data/data"
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  boards: boards,
  tasks: tasks,
}

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    reset: () => initialState,
    moveTask: (state) => {
      console.log("move a task")
    },

    deleteTask: (state, action) => {
      const { taskId } = action.payload
      state.tasks = state.tasks.filter((task) => task.id !== taskId)
    },

    updateTask: (state, action) => {
      const { taskId, ...props } = action.payload
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...props }
        } else {
          return task
        }
      })
    },
  },
})

export const { reset, moveTask, deleteTask, updateTask } = kanbanSlice.actions
export const selectKanban = (state: any) => state.kanban

export default kanbanSlice.reducer
