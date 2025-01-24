import { BrowserRouter, Routes, Route } from "react-router";

// Screen
import App from "../App";
import Login from "../screen/login/login";

export default function Navegation() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}
