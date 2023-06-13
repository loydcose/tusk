import priorities from "@/app/data/priorities"

const priorityColor = (priority: string) => {
  const colors = {
    high: priorities[0].color,
    medium: priorities[1].color,
    low: priorities[2].color,
    none: priorities[3].color,
  }
  return colors[priority.toLowerCase()]
}

export default priorityColor
