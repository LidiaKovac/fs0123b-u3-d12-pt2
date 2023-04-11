import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setSelectedUser } from "../redux/actions"

{
  /* <SingleUserRow user={singleUser} /> */
}
// andra' inserito in un map
export const SingleUserRow = ({ user }) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <td>{user.id}</td>
      {/* //* trasformare il nome in un Link che ci porti a localhost:3000/userAgenda
      //* ci saranno tutti i todo (da API) di quell'utente
      //* voglio inserire l'id dell'utente su cui ho cliccato nello store di redux
      */}
      <td onClick={()=> dispatch(setSelectedUser(user.name))}>
        <Link to={`/userAgenda/${user.id}`}> {user.name} </Link>
      </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  )
}
