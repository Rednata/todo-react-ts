import { useEffect, useState } from "react";
import { ToDo } from "../models/todoItem"
import { useNavigate, useParams } from "react-router-dom";

interface ComponentProps {
  todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const {id} = useParams();
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo>()
  console.log('todo: ', todo);

  useEffect(() => {
    const searchTodo = todos.find(todo => todo.id === Number(id))
    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('404')
    }
  }, [todos, id, navigate])

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  )
}
