import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserTable } from "./component/UserTable"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserTodo } from "./component/UserTodo"

function App() {
  return (
    <BrowserRouter>
      {/* <h1>La mia app</h1> */}
      <Routes>
        <Route element={<UserTable />} path="/" />
        <Route element={<UserTodo/>} path='/userAgenda/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
