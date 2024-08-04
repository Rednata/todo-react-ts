import s from './ToDoListItem.module.scss'

export const ToDoListItem = () => {
  return (
    <li className={s.wrapper}>
      <span>Первая задача</span>
      <div className={s.buttons}>
        <button className={`${s.btn} ${s.btnTrash}`}></button>
        <button className={`${s.btn} ${s.btnCheck}`}></button>
      </div>
    </li>
  )
}