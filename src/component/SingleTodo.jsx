import { ListGroup } from "react-bootstrap"

export const SingleTodo = ({ todo }) => {
  return <ListGroup.Item>{todo.title}</ListGroup.Item>
}
