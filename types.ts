export type Task = {
  id: number
  boardId: number,
  isEditing: boolean
  title: string
  priority: string
  updatedAt: Date
}

export type Board = {
  id: number
  title: string
}

export type Priority = {
  id: string
  title: string
  color: string
}

export type Theme = "light" | "dark" | "system"
export type State = {
  boards: Board[],
  tasks: Task[]
}

export type Action = {
  payload: any
}