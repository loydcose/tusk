import { configureStore } from "@reduxjs/toolkit"
import kanbanSlice from "./features/boards/kanbanSlice"

export const store = configureStore({
  reducer: {
    kanban: kanbanSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// How to Setup Redux Toolkit in Next.js 13 App Directory
// Article: https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
