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
  const [todoValue, setTodoValue] = useState('')//Moved from TodoInput.jsx


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndux) => {
      return todoIndux !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
