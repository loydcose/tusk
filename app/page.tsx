"use client"

import Navbar from "@/components/Navbar"
import Board from "@/components/Board"
import { useAppSelector } from "@/redux/hooks"
import { selectKanban } from "@/redux/features/boards/kanbanSlice"
import { Board as BoardType, Task } from "@/types"

export default function Home() {
  const kanban = useAppSelector(selectKanban)

  return (
    <main className="flex">
      <section className="mx-auto mt-20 w-[90%] max-w-[900px]">
        <Navbar />
        <article className="grid grid-cols-3 gap-8">
          {kanban.boards.map((board: BoardType) => {
            const boardTasks = kanban.tasks.filter((task: Task) => {
              return board.id === task.boardId
            })
            return <Board key={board.id} board={board} tasks={boardTasks} />
          })}
        </article>
      </section>
    </main>
  )
}
