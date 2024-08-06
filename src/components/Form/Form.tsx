import { useDispatch } from 'react-redux';
import { createAction } from '../../feature/todoList';
import { ChangeEvent, FormEvent, useState } from 'react'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled';
import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  // let createText = ''
  const formSubmit = (e: FormEvent) => {
    // e: React.SyntheticEvent
    e.preventDefault();
    if (text) {
      props.createNewToDo(text);
      dispatch(createAction(text))
      setText('')
    }
  }

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField type="text"
            // className={s.input}
            onChange={changeText}
            value={text}
            />
          <FormControl
            icon={plusIcon}
          ></FormControl>
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}