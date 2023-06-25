import { Board, Task, Theme } from "@/types"
import { storageName } from "./defaults"

interface SetData {
  tasks: Task[]
  theme: Theme
  boards: Board[]
}

export default function setStorage(prop: SetData) {
  localStorage.setItem(storageName, JSON.stringify({ ...prop }))
}
