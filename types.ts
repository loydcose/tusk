export type Task = {
  id: number
  isEditing: boolean
  title: string
  priority: "high" | "medium" | "low" | "none"
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
