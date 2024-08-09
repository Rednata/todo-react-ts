import { useDispatch } from 'react-redux'
import { HeaderBlock, HeaderButtonTheme, HeaderContainer, HeaderNavLink, HeaderToggle } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderBlock >
      <HeaderContainer >
        <HeaderNavLink to="/" >ToDo</HeaderNavLink>
        <HeaderNavLink to="/list" >List</HeaderNavLink>
        <HeaderToggle className="toggleButton">
          <HeaderButtonTheme
            onClick={() => dispatch(toggleThemeAction())}
          >toggle</HeaderButtonTheme>
        </HeaderToggle>
      </HeaderContainer>
    </HeaderBlock>
  )
}