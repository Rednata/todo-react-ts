import s from './Form.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react'

export const Form = (props: { createNewToDo: Function }) => {

  const [text, setText] = useState<string>('');
  // let createText = ''
  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text) {
      props.createNewToDo(text);
      setText('')
    }
  }

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div className={s.wrapper}>
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input type="text"
            className={s.input}
            onChange={changeText}
            value={text}
            />
          <button className={s.btn}></button>
        </label>
      </form>
    </div>
  )
}