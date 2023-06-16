import priorityColor from "@/lib/priorityColor"

type PropTypes = {
  color: string
  className?: string
}

export default function PriorityCircle({ color, className }: PropTypes) {
  return (
    <div
      style={{
        backgroundColor: priorityColor(color),
      }}
      className={"h-3 w-3 rounded-full shrink-0 " + className}
    ></div>
  )
}
