import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home} from "./pages/home/index"
import { Checkout } from './pages/checkout'
import { New } from './pages/categories/new'
import { PrendaExterior } from './pages/categories/exterior'
import { Vestidos } from './pages/categories/vestidos'
import { Camisas } from './pages/categories/camisas'
import { Punto } from './pages/categories/punto'
import { Buzos } from './pages/categories/buzos'
import { Pantalones } from './pages/categories/pantalones'
import { FaldasShorts } from './pages/categories/faldas'
import { Accesorios } from './pages/categories/accesorios'
import { Details } from './pages/categories/components/details'
import { CartProvider } from './context/cartContext'
import { Cart } from './pages/carrito'
import { End } from './pages/end'


function App() {
 

  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pages/new" element={<New />}/>
        <Route path="/pages/prenda-exterior" element={<PrendaExterior />}/>
        <Route path="/pages/vestidos" element={<Vestidos />}/>
        <Route path="/pages/camisas-tops" element={<Camisas />}/>
        <Route path="/pages/punto" element={<Punto />}/>
        <Route path="/pages/buzos" element={<Buzos />}/>
        <Route path="/pages/pantalones" element={<Pantalones/>}/>
        <Route path="/pages/faldas-shorts" element={<FaldasShorts />}/>
        <Route path="/pages/accesorios" element={<Accesorios />}/>
        <Route path="/clothes/:productId" element={<Details />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/end" element={<End />}/>
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App
