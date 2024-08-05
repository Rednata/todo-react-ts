import { ToDo } from '../../../models/todoItem';
import s from './ToDoListItem.module.scss'

export const ToDoListItem = (props:
  { todoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {


  return (
    <li className={s.wrapper}>
      <span>{props.todoItem.text}</span>
      <div className={s.buttons}>
        <button
          className={`${s.btn} ${s.btnTrash}`}
          onClick={() => props.deleteToDo(props.todoItem)}
        ></button>
        <button
          className={`${s.btn} ${props.todoItem.isDone ? s.btnCheck : s.btnUncheck}`}
          onClick={() =>  props.updateToDo(props.todoItem)}
        >
        </button>
      </div>
    </li>
  )
}