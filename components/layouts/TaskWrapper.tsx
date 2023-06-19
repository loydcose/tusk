import { ReactNode } from "react"

type PropTypes = {
  children: ReactNode
  hidden?: boolean
}

export default function TaskWrapper({ children, hidden = false }: PropTypes) {
  return (
    <div
      className={`${
        hidden && "hidden"
      } border border-input rounded-lg cursor-grab hover:bg-muted/[.35] transition-colors`}
    >
      {children}
    </div>
  )
}
