import { useState } from "react"
import "./App.css"
import Header from "./components/header/layout";
import InputList from "./components/inputList/layout";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [todos, setTodos] = useState([])
  const [doneTodos, setDoneTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [newContext, setNewContext] = useState('')
  // const [context, setContext] = useState([])

  const handleChange1 = (event) => {
    setNewTodo(event.target.value)
  }
  const handleChange2 = (event) => {
    setNewContext(event.target.value)
  }

  const handleDelete = (event) => {
    // console.log(event.target.getAttribute("id"))
    // let dump = [...todos]
    // dump.splice(event.target.getAttribute("id"), 1)
    let index = parseInt(event.target.getAttribute("id"))
    setTodos([...todos.slice(0,index), ...todos.slice(index +1, todos.length)])
  }

  const handleDone = (event) => {
    let dump = [...todos]
    // console.log(dump[event.target.getAttribute("id")])
    handleDelete(event)
    setDoneTodos([...doneTodos, dump[event.target.getAttribute("id")]])
    // console.log(doneTodos)
  }

  const handleCancel = (event) => {
    // console.log(event.target.getAttribute("id"))
    let index = parseInt(event.target.getAttribute("id"))
    let dump = [...doneTodos]
    setTodos([...todos ,dump[event.target.getAttribute("id")]])
    // dump.splice(event.target.getAttribute("id"),1)
    // setDoneTodos(dump)
    setDoneTodos([...doneTodos.slice(0,index), ...doneTodos.slice(index + 1, doneTodos.length) ])
  }
  const handleDeleteDone = (event) => {
    // console.log(event.target.getAttribute("id"))
    // let dump = [...doneTodos]
    let index = parseInt(event.target.getAttribute("id"))
    // dump.splice(event.target.getAttribute("id"), 1)
    // setDoneTodos(dump)
    setDoneTodos([...doneTodos.slice(0,index), ...doneTodos.slice(index + 1, doneTodos.length) ])
  }

  const addNewTodo = () => {
    if (newTodo.length > 0 && newContext.length > 0) {
      setNewTodo('')
      setNewContext('')
      setTodos([...todos, { title: newTodo, context: newContext, id: Date.now() }])
    }else {
      alert('Title and Context are required')
    }
  }
  return (
    <div className="app">
      <Header />
      <InputList handleChange1={handleChange1} handleChange2={handleChange2} handleDone={handleDone} handleDelete={handleDelete} handleDeleteDone={handleDeleteDone} handleCancel={handleCancel} addNewTodo={addNewTodo} todos={todos} setTodos={setNewTodo} doneTodos={doneTodos} newTodo={newTodo} setNewTodo={setNewTodo} newContext={newContext} setNewContext={setNewContext} />
    </div>
  )
}

export default App;