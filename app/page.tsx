"use client"

import Navbar from "@/components/Navbar"
import Board from "@/components/Board"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  moveTask,
  selectKanban,
  setState,
} from "@/redux/features/boards/kanbanSlice"
import { Board as BoardType, Task } from "@/types"
import { useEffect } from "react"
import { storageName } from "@/lib/defaults"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import SortButton from "@/components/SortButton"

export default function Home() {
  const kanban = useAppSelector(selectKanban)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // ensuring the window object has defined before accessing local storage
    const storage = localStorage.getItem(storageName)
    if (storage) {
      dispatch(setState(JSON.parse(storage)))
    }
  }, [])

  return (
    <main className="min-h-screen py-10 md:py-20">
      <section className="mx-auto w-[90%] max-w-[900px]">
        <Navbar />
        <SortButton />
        <DragDropContext onDragEnd={(result) => dispatch(moveTask({ result }))}>
          <article className="grid md:grid-cols-3 gap-8">
            {kanban.boards.map((board: BoardType) => {
              const boardTasks = kanban.tasks.filter((task: Task) => {
                return board.id === task.boardId
              })
              return <Board key={board.id} board={board} tasks={boardTasks} />
            })}
          </article>
        </DragDropContext>
      </section>
    </main>
  )
}
