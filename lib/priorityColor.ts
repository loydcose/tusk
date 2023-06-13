import priorities from "@/app/data/priorities"

const priorityColor = (priority: string) => {
  const colors = {
    high: priorities[3].color,
    medium: priorities[2].color,
    low: priorities[1].color,
    none: priorities[0].color,
  }
  const color = colors[priority] || colors.none
  return color
}

export default priorityColor
