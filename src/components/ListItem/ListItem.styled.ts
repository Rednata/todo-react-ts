import styled from "styled-components";

export const ListItemLink = styled.a<{ isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => props.isDone ? 'green' : 'red' }
`