import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchTodoAction } from "../redux/actions"
import { ListGroup } from "react-bootstrap"
import { SingleTodo } from "./SingleTodo"

export const UserTodo = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo.todo.content)
  const userName = useSelector((state)=> state.user.users.selected)
  useEffect(() => {
    dispatch(fetchTodoAction(id))
  }, [])
  return (
    <>
    <h1>{userName}</h1>
      <ListGroup>
        {todos.map((todo) => (
          <SingleTodo todo={todo} />
        ))}
      </ListGroup>
    </>
  )
}
