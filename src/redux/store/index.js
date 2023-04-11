//* passaggio 1. configureStore => @reduxjs/toolkit => rtk

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducer/user"
import todoReducer from "../reducer/todo"

const bigReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

const store = configureStore({
  //* passaggio 2. creare il reducer => /reducers/user.js
  reducer: bigReducer,
})

//* passaggio 3. export lo store e inserirlo su src/index.js
export default store
