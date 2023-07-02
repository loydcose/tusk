import { Board, Task, Theme } from "@/types"

export const storageName = "kanban"

const theme: Theme = "system"
const tasks: Task[] = []
const boards: Board[] = [
  {
    id: 1,
    title: "To-do",
  },
  {
    id: 2,
    title: "In Progress",
  },
  {
    id: 3,
    title: "Done",
  },
]

const defaults = {
  tasks,
  theme,
  boards,
}

export default defaults
