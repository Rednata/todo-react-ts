import { useEffect, useState } from "react";
import { ToDo } from "../models/todoItem"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewListItem = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const {id} = useParams();
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo>()
  console.log('todo: ', todo);

  useEffect(() => {
    const searchTodo = todoList.find(todo => todo.id === (id))
    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('404')
    }
  }, [todoList, id, navigate])

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  )
}
