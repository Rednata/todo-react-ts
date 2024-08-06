import { useDispatch } from 'react-redux';
import { ToDo } from '../../../models/todoItem';
import s from './ToDoListItem.module.scss'
import checkIcon from '../../../assets/images/check.png';
import trashIcon from '../../../assets/images/trash.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import { deleteAction, updateAction } from '../../../feature/todoList';
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled';

export const ToDoListItem = (props:
  { todoItem: ToDo,
    updateToDo: Function,
    deleteToDo: Function,
    notify: Function }) => {

    const dispatch = useDispatch();

    const handleDeleteItem = () => {
      props.notify(`${props.todoItem.text}: удалено`)
      dispatch(deleteAction(props.todoItem))
    }

    const handleUpdateItem = () => {
      if (props.todoItem.isDone) {
        props.notify(`${props.todoItem.text}: НЕ выполнено`)
      } else {
        props.notify(`${props.todoItem.text}: выполнено`)
      }
      dispatch(updateAction(props.todoItem))
    }

  return (
    <ToDoItem>
      <ToDoItemText>{props.todoItem.text}</ToDoItemText>
      <ToDoItemControls >
        <ToDoItemControl
          className={`${s.btnTrash}`}
          onClick={handleDeleteItem}
          icon={trashIcon}
        ></ToDoItemControl>
        <ToDoItemControl
        icon={`${props.todoItem.isDone ? checkIcon: uncheckIcon}`}
          // className={`${props.todoItem.isDone ? s.btnCheck : s.btnUncheck}`}
          onClick={handleUpdateItem}
        >
        </ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  )
}