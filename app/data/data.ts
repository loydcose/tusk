const boards = [
  {
    id: 1,
    title: "Not Started",
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

const tasks = [
  {
    id: 1,
    boardId: 1,
    isEditing: false,
    title: "Cook meal",
    priority: "high",
  },
  {
    id: 2,
    boardId: 1,
    isEditing: false,
    title: "Post content on facebook and instagram",
    priority: "low",
  },
  {
    id: 3,
    boardId: 1,
    isEditing: false,
    title: "Pakainin ang mga aso ni aling maria",
    priority: "medium",
  },
  {
    id: 121235,
    boardId: 2,
    isEditing: false,
    title: "Cook meal",
    priority: "high",
  },
  {
    id: 4,
    boardId: 2,
    isEditing: false,
    title: "Post content on facebook and instagram",
    priority: "low",
  },
  {
    id: 5,
    boardId: 3,
    isEditing: false,
    title: "Cook meal",
    priority: "medium",
  },
  {
    id: 6,
    boardId: 3,
    isEditing: false,
    title: "Post content on facebook and instagram",
    priority: "low",
  },
]

export { boards, tasks }
