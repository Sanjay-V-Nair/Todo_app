import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // let todos = [
  //   'Go to the gym',
  //   'Freshen up',
  //   'Have breakfast'
  // ]

  //NO NEED TO USE THE TASKS IN THE ARRAY SINCE WE ARE USING THE STATE AND ADDING THE TASKS TO THE ARRAY USING THE STATE
  // const [todos, setTodos] = useState(['Go to the gym',
  //   'Freshen up',
  //   'Have breakfast'
  // ])
  const [todos, setTodos] = useState([])


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
