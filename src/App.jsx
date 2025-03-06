import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Cart from "./page/Cart"
import Home from "./page/Home"
import ProductDetail from "./page/ProductDetail"


function App() {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
    </Routes>
  </div>
     
  )
}

export default App
