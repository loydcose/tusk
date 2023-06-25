import setStorage from "@/lib/setStorage"
import defaults from "@/lib/defaults"
import { Task } from "@/types"
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  value: defaults,
}

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setState: (state, action) => {
      const { payload } = action
      state.value = { ...payload }
      setStorage(state.value)
    },

    setTheme: (state, action) => {
      const { theme } = action.payload
      state.value.theme = theme
      setStorage(state.value)
    },

    reset: (state) => {
      state.value = initialState.value
      setStorage(state.value)
    },

    moveTask: (state) => {
      console.log("move a task")
      setStorage(state.value)
    },
    
    addTasks: (state, action) => {
      const { boardId } = action.payload

      const emptyTask = {
        id: Date.now(),
        boardId,
        title: "Task",
        isEditing: true,
        priority: "none",
      }

      state.value.tasks = [...state.value.tasks, emptyTask]
      setStorage(state.value)
    },

    deleteTask: (state, action) => {
      const { taskId } = action.payload
      state.value.tasks = state.value.tasks.filter(
        (task: Task) => task.id !== taskId
      )
      setStorage(state.value)
    },

    updateTask: (state, action) => {
      const { taskId, ...props } = action.payload
      state.value.tasks = state.value.tasks.map((task: Task) => {
        if (task.id === taskId) {
          return { ...task, ...props }
        } else {
          return task
        }
      })
      setStorage(state.value)
    },
  },
})

export const {
  reset,
  moveTask,
  deleteTask,
  updateTask,
  addTasks,
  setState,
  setTheme,
} = kanbanSlice.actions
export const selectKanban = (state: any) => state.kanban.value

export default kanbanSlice.reducer
