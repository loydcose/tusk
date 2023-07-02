import setStorage from "@/lib/setStorage"
import defaults from "@/lib/defaults"
import { Task } from "@/types"
import { createSlice, current } from "@reduxjs/toolkit"
import priorities from "@/app/data/priorities"

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

    moveTask: (state, action) => {
      const { result } = action.payload
      const { draggableId, destination } = result
      if (!destination) return

      const restTasks = []
      const destinationTasks = []
      let removedTask: Task | null = null

      // splitting tasks
      for (const task of state.value.tasks) {
        if (
          task.boardId === parseInt(destination.droppableId) &&
          task.id !== parseInt(draggableId)
        ) {
          destinationTasks.push(task)
        } else {
          if (task.id === parseInt(draggableId)) {
            removedTask = {
              ...task,
              boardId: parseInt(destination.droppableId),
            }
          } else {
            restTasks.push(task)
          }
        }
      }

      // replacing and combining tasks
      destinationTasks.splice(destination.index, 0, removedTask!)
      state.value.tasks = [...restTasks, ...destinationTasks]
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
        updatedAt: new Date(),
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

    sortTasks: (state, action) => {
      const { sort, order } = action.payload
      const { tasks } = state.value
      if (!sort) return

      let sortedTasks

      switch (sort) {
        case "name":
          sortedTasks = tasks.sort((a, b) => a.title.localeCompare(b.title))
          break
        case "dateModified":
          sortedTasks = tasks.sort(
            (a, b) => a.updatedAt.getTime() - b.updatedAt.getTime()
          )
          break
        case "priority":
          sortedTasks = tasks.sort((a, b) => {
            const prioIds = priorities.map((priority) => priority.id)
            return prioIds.indexOf(a.priority) - prioIds.indexOf(b.priority)
          })
          break
        default:
          return
      }
      if (order === "desc") sortedTasks.reverse()
      state.value.tasks = sortedTasks
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
  sortTasks,
} = kanbanSlice.actions
export const selectKanban = (state: any) => state.kanban.value

export default kanbanSlice.reducer
