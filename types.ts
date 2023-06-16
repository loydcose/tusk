export type Task = {
  id: number
  isEditing: boolean
  title: string
  priority: string
}

export type Board = {
  id: number
  title: string
  tasks: Task[]
}

export type Priority = {
  id: string
  title: string
  color: string
}

export type State = {
  value: Board[]
}

export type Action = {
  payload: any
}