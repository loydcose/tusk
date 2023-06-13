const boards = [
  {
    id: 1,
    title: "Not Started",
    tasks: [
      {
        id: 1,
        isEditing: false,
        title: "Cook meal",
        priority: "wew",
      },
      {
        id: 2,
        isEditing: false,
        title: "Post content on facebook and instagram",
        priority: "low",
      },
      {
        id: 3,
        isEditing: false,
        title: "Pakainin ang mga aso ni aling maria",
        priority: "medium",
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    tasks: [
      {
        id: 3,
        isEditing: true,
        title: "Cook meal",
        priority: "high",
      },
      {
        id: 4,
        isEditing: false,
        title: "Post content on facebook and instagram",
        priority: "low",
      },
    ],
  },
  {
    id: 3,
    title: "Done",
    tasks: [
      {
        id: 5,
        isEditing: false,
        title: "Cook meal",
        priority: "medium",
      },
      {
        id: 6,
        isEditing: true,
        title: "Post content on facebook and instagram",
        priority: "low",
      },
    ],
  },
]

export default boards
