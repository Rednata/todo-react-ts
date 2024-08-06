import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const getActiveClass = ({ isActive }:  {isActive: boolean}): string =>
    isActive ? `${s.link} ${s.active}` : s.link

  return (
    <header className={s.header}>
    <div className={s.container}>
      <NavLink to="/" className={getActiveClass}>
        ToDo
      </NavLink>
      <NavLink to="/list" className={getActiveClass} >
        List
      </NavLink>
      </div>
    </header>
  )
}