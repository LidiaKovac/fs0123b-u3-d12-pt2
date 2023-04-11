import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction, setUsers } from "../redux/actions"
import { Table } from "react-bootstrap"
import { SingleUserRow } from "./SingleUserRow"

export const UserTable = () => {
  //? dispatch => funzione dispatch + azione
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users.content)
  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((singleUser) => (
          <SingleUserRow key={`user_${singleUser.id}`} user={singleUser} />
        ))}
      </tbody>
    </Table>
  )
}
