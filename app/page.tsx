"use client"

import Navbar from "@/components/Navbar"
import Board from "@/components/Board"
import { useAppSelector } from "@/redux/hooks"
import { selectBoards } from "@/redux/features/boards/boardSlice"

export default function Home() {
  const boards = useAppSelector(selectBoards)

  return (
    <main className="flex">
      <section className="mx-auto mt-20 w-[90%] max-w-[900px]">
        <Navbar />
        <article className="grid grid-cols-3 gap-8">
          {boards.map((board) => (
            <Board key={board.id} board={board} />
          ))}
        </article>
      </section>
    </main>
  )
}
