import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  cursor: pointer;

  &.active {
    color: #ffffff33;
    cursor: default;
  }
`
export const HeaderToggle = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`
export const HeaderButtonTheme = styled.button`
  border-radius: 6px;
  border: none;
  padding: 3px 12px;
`


