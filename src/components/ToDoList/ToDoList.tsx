import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import  s from './ToDoList.module.scss'

export const ToDoList = () => {
  return (
    <div className={s.container}>
    <ul className={`${s.list} ${s.failed}`}>
      <ToDoListItem />
      <ToDoListItem />

      {/* <li className="todo-list-item__wrapper">
        <span>Первая задача</span>
        <div className="todo-list-item__buttons">
          <button className="btn-trash"></button>
          <button className="btn-check"></button>
        </div>
      </li>
    </ul>
    <ul className="todo-list completed">
      <li className="todo-list-item__wrapper">
        <span>Вторая задача</span>
        <div className="todo-list-item__buttons">
          <button className="btn-trash"></button>
          <button className="btn-uncheck"></button>
        </div>
      </li> */}
    </ul>
  </div>
  )
}