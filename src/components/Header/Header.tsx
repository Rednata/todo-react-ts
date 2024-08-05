import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const getActiveClass = ({ isActive }:  {isActive: boolean}): string =>
    isActive ? `${s.link} ${s.active}` : s.link

  return (
    <header className={s.header}>
    <div className={s.container}>
      <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/todo" className={getActiveClass} >
        ToDo
      </NavLink>
      </div>
    </header>
  )
}