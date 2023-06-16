export type Task = {
  id: number
  boardId: number,
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
  boards: Board[],
  tasks: Task[]
}

export type Action = {
  payload: any
}