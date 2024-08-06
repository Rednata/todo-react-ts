import { ToDo } from "../../models/todoItem";
import { ListItemLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemLink
      href={`/list/${todo.id}`}
      isDone={todo.isDone}
      >
      { todo.text }
    </ListItemLink>
  )
}