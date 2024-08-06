import { ToDo } from "../../models/todoItem";
import s from './ListItem.module.scss';

export const ListItem = ({ todo }: { todo: ToDo }) => {
  console.log('todo: ', todo);
  return (
    <a
      href={`/list/${todo.id}`}
      className={`${s.link} ${todo.isDone ? s.done : s.notDone }`} >
      { todo.text }
    </a>
  )
}