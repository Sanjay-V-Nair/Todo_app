import { useState, useEffect } from "react"
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

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndux) => {
      return todoIndux !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
