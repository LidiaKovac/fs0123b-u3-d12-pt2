export const SET_USERS = "SET_USERS"
export const SET_SELECTED_USER = "SET_SELECTED_USER"
export const SET_TODO = "SET_TODO"

//! action sincrone => return oggetto
//! action asincrone => return funzione asincrona

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  }
}

export const setSelectedUser = (name) => {
  return {
    type: SET_SELECTED_USER,
    payload: name,
  }
}

export const setTodo = (todos) => {
  return {
    type: SET_TODO,
    payload: todos,
  }
}

// const sum = (a,b) => {
//   return a+b
// }

// sum(2,2) //4

export const fetchUsersAction = () => {
  return async (dispatch, getState) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await res.json()
    console.log("risultato fetch", users)
    dispatch(setUsers(users))
    // dispatch({
    //   type: SET_USERS,
    //   payload: users,
    // })
  }
}

export const fetchTodoAction = (idUtente) => {
  return async (dispatch, getState) => {
    //https://jsonplaceholder.typicode.com/users/1/todos
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${idUtente}/todos`
    )
    let todos = await res.json()
    dispatch(setTodo(todos))
  }
}
