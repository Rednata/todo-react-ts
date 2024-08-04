import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
    <div className={s.container}>
      <a href="/" className={s.link}>ToDo</a>
      </div>
    </header>
  )
}