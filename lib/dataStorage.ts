import { Board, Task, Theme } from "@/types"
import defaults from "./defaults"

interface SetData {
  tasks?: Task[]
  theme?: Theme
  boards?: Board[]
}

interface PreviousData {
  tasks: Task[]
  theme: Theme
  boards: Board[]
}

const storageName = "kanban"
let previousData: PreviousData


export function getData() {
  const storage = localStorage.getItem(storageName)

  if (storage) {
    previousData = JSON.parse(storage)
    return previousData
  } else {
    setData(defaults)
    return getData()
  }
}

export function setData(prop: SetData) {
  previousData = { ...previousData, ...prop }
  localStorage.setItem(storageName, JSON.stringify(previousData))
}
