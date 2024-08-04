import s from './Form.module.scss'

export const Form = () => {
  return (
    <div className={s.wrapper}>
      <form action="#" >
        <label>
          <input type="text" className={s.input} />
          <button className={s.btn}></button>
        </label>
      </form>
    </div>
  )
}