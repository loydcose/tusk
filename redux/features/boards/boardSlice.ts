import boards from "@/app/data/boards"
import { createSlice, current } from "@reduxjs/toolkit"
import setTaskEditingAct from "./actions/setTaskEditing"
import updateTaskAct from "./actions/updateTaskAct"
import deleteTaskAct from "./actions/deleteTaskAct"

const initialState = {
  value: boards,
}

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    reset: () => initialState,
    moveTask: (state) => {
      console.log("move a task")
    },
    setTaskEditing: (state, action) => {
      state.value = setTaskEditingAct(state, action)
    },
    deleteTask: (state, action) => {
      state.value = deleteTaskAct(state, action)
    },
    updateTask: (state, action) => {
      state.value = updateTaskAct(state, action)
    },
  },
})

export const { reset, moveTask, setTaskEditing, deleteTask, updateTask } =
  boardsSlice.actions
export const selectBoards = (state: any) => state.boards.value

export default boardsSlice.reducer
