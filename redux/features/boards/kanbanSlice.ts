import { boards, tasks } from "@/app/data/data"
import { getData, setData } from "@/lib/dataStorage"
import { Task } from "@/types"
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  boards: getData().boards,
  tasks: getData().tasks,
}

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    reset: () => initialState,
    moveTask: (state) => {
      console.log("move a task")
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

      state.tasks = [...state.tasks, emptyTask]
      setData({ tasks: state.tasks })
    },

    deleteTask: (state, action) => {
      const { taskId } = action.payload
      state.tasks = state.tasks.filter((task: Task) => task.id !== taskId)
      setData({ tasks: state.tasks })
    },

    updateTask: (state, action) => {
      const { taskId, ...props } = action.payload
      state.tasks = state.tasks.map((task: Task) => {
        if (task.id === taskId) {
          return { ...task, ...props }
        } else {
          return task
        }
      })
      setData({ tasks: state.tasks })
    },
  },
})

export const { reset, moveTask, deleteTask, updateTask, addTasks } =
  kanbanSlice.actions
export const selectKanban = (state: any) => state.kanban

export default kanbanSlice.reducer
