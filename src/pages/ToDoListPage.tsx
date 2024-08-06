import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todoItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ToDoListPage = () => {
  const notify = (text: string) => {
    toast(text, {
      position: 'bottom-right',
      autoClose: 4000,
      theme: "color",
    })
  };

  const todoList = useSelector((state: RootState) => state.todoList.todos)

  const createNewToDo = (text: string) => {}

  const updateToDo = (todoItem: ToDo) => {}

  const deleteToDo = (todoItem: ToDo) => {}

  return (
    <>
      <Form createNewToDo={createNewToDo}/>
      <ToDoList
        todos={todoList}
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