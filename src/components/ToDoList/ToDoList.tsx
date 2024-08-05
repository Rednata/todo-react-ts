import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import  s from './ToDoList.module.scss'
import { ToDo } from "../../models/todoItem"

export const ToDoList = (props:
  { todos: ToDo[],
    updateToDo: Function,
    deleteToDo: Function,
    notify: Function
  }) => {

  const checkedList = () => {
    return props.todos
    .filter(item => !item.isDone)
    .map((todo, idx) => {
      return <ToDoListItem
        updateToDo={props.updateToDo}
        deleteToDo={props.deleteToDo}
        todoItem={todo}
        notify={props.notify}
        key={idx}
      />
    })
  }

  const unCheckedList = () => {
    return props.todos
    .filter(item => item.isDone)
    .map((todo, idx) => {
      return <ToDoListItem
        updateToDo={props.updateToDo}
        deleteToDo={props.deleteToDo}
        todoItem={todo}
        notify={props.notify}
        key={idx}
      />
    })
  }

  return (
    <div className={s.container}>
    <ul className={`${s.list} ${s.failed}`}>
      {checkedList()}
    </ul>

    <ul className={`${s.list} ${s.completed}`}>
      { unCheckedList() }
    </ul>

  </div>
  )
}