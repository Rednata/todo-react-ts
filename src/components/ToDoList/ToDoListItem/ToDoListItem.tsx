import { ToDo } from '../../../models/todoItem';
import s from './ToDoListItem.module.scss'

export const ToDoListItem = (props:
  { todoItem: ToDo,
    updateToDo: Function,
    deleteToDo: Function,
    notify: Function }) => {

    const handleDeleteItem = () => {
      props.updateToDo(props.todoItem)
      props.notify(`${props.todoItem.text}: удалено`)
    }

    const handleUpdateItem = () => {
      if (props.todoItem.isDone) {
        props.notify(`${props.todoItem.text}: НЕ выполнено`)
        // props.notify('Задача НЕ выполнена')
      } else {
        props.notify(`${props.todoItem.text}: выполнено`)
        props.notify('Задача выполнена')
      }
      props.updateToDo(props.todoItem)
    }

  return (
    <li className={s.wrapper}>
      <span>{props.todoItem.text}</span>
      <div className={s.buttons}>
        <button
          className={`${s.btn} ${s.btnTrash}`}
          onClick={handleDeleteItem}
        ></button>
        <button
          className={`${s.btn} ${props.todoItem.isDone ? s.btnCheck : s.btnUncheck}`}
          onClick={handleUpdateItem}
        >
        </button>
      </div>
    </li>
  )
}