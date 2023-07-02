import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ChevronDown, Minus } from "lucide-react"
import { useAppDispatch } from "@/redux/hooks"
import { sortTasks } from "@/redux/features/boards/kanbanSlice"

const sorts = [
  {
    id: 1,
    name: "Name",
    value: "name",
  },
  {
    id: 2,
    name: "Date modified",
    value: "dateModified",
  },
  {
    id: 1,
    name: "Priority",
    value: "priority",
  },
]

const orders = [
  {
    id: 1,
    name: "Ascending",
    value: "asc",
  },
  {
    id: 2,
    name: "Descending",
    value: "desc",
  },
]

export default function SortButton() {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState("")
  const [order, setOrder] = useState("asc")

  useEffect(() => {
    dispatch(sortTasks({ sort, order }))
  }, [sort, order])

  return (
    <div className="mb-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <span>Sort by</span>
            {sort && (
              <>
                <Minus className="h-4 w-4 opacity-50" />
                <span>{sorts?.find((item) => item.value === sort)?.name}</span>
              </>
            )}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-44">
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            {sorts.map((sort) => (
              <DropdownMenuRadioItem key={sort.id} value={sort.value}>
                {sort.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={order} onValueChange={setOrder}>
            {orders.map((order) => (
              <DropdownMenuRadioItem key={order.id} value={order.value}>
                {order.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
