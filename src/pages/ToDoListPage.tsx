import { useState } from 'react';
import { Form } from '../components/Form/Form'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todoItem';

export const ToDoListPage = () => {

  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: 'Первая задача',
      isDone: false
    },
    {
      id: 1,
      text: 'Вторая задача',
      isDone: true
    },
    {
      id: 2,
      text: 'Третья задача',
      isDone: true
    },
    {
      id: 3,
      text: 'Четвертая задача',
      isDone: true
    }
  ])

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
      <Header />
      <Form createNewToDo={createNewToDo}/>
      <ToDoList
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </>
  )
}