"use client"

import Navbar from "@/components/Navbar"
import Board from "@/components/Board"
import { useAppSelector } from "@/redux/hooks"
import { selectKanban } from "@/redux/features/boards/kanbanSlice"
import { Board as BoardType, Task } from "@/types"

export default function Home() {
  const kanban = useAppSelector(selectKanban)

  return (
    <main className="min-h-screen py-10 md:py-20">
      <section className="mx-auto w-[90%] max-w-[900px]">
        <Navbar />
        <article className="grid md:grid-cols-3 gap-8">
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
