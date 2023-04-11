import { SET_USERS, SET_SELECTED_USER } from "../actions"
//* passaggio 1. creare l'initialState => diamo un' idea di come sara' lo state
const initialState = {
  users: {
    content: [],
    selected: ""
  },
}

//* passaggio 2. creare il reducer con lo switch e 
//!!! IL DEFAULT!
const userReducer = (state = initialState, action) => {
  //reducer => state, action
  //definisce le azioni (actions)
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          content: action.payload,
        }
      }
    case SET_SELECTED_USER: 
      return {
        ...state,
        users: {
          ...state.users, 
          selected: action.payload
        }
      }
    default: return state
  }
}


//* passaggio 3. export il reducer
export default userReducer
