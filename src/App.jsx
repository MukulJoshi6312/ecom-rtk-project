import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Cart from "./page/Cart"
import Home from "./page/Home"


function App() {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </div>
     
  )
}

export default App
