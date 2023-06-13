import boards from "@/app/data/boards"
import { createSlice } from "@reduxjs/toolkit"

const initialState = boards

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    reset: () => initialState,
    moveTask: (state) => {
      console.log("move a task")
    },
    setTaskEditing: (state) => {
      console.log("set isEditing")
    },
    deleteTask: (state) => {
      console.log("delete a task")
    },
    updateTask: (state) => {
      console.log("update a task")
    },
  },
})

export const { reset, moveTask, setTaskEditing, deleteTask, updateTask } =
  boardsSlice.actions

export const selectBoards = (state) => state.boards

export default boardsSlice.reducer
