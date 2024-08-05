import { useState } from 'react';
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todoItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListPage = () => {
  const notify = (text: string) => {
    toast(text, {
      position: 'bottom-right',
      autoClose: 4000,
      theme: "color",
    })
  };

  const [todos, setTodos] = useState<ToDo[]>([])

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length, text, isDone: false
    }
    setTodos([...todos, newToDo])
  }

  const updateToDo = (todoItem: ToDo) => {
  const newTodos: ToDo[] = todos.map(todo => {
    if (todo.id === todoItem.id) {
      todo.isDone = !todo.isDone
    }
    return todo
  })
    setTodos(newTodos)
  }

  const deleteToDo = (todoItem: ToDo) => {
    const newTodos = todos.filter(todo => todo.id !== todoItem.id)
    setTodos(newTodos)
  }

  return (
    <>
      <Form createNewToDo={createNewToDo}/>
      <ToDoList
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
        notify={notify}
      />
      <div>
        <ToastContainer />
      </div>
    </>
  )
}