import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // let todos = [
  //   'Go to the gym',
  //   'Freshen up',
  //   'Have breakfast'
  // ]

  const [todos, setTodos] = useState(['Go to the gym',
    'Freshen up',
    'Have breakfast'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
