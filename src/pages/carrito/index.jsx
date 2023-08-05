import { useContext } from "react"
import "./style.css"
import { CartContext } from "../../context/cartContext"
import { Header } from "../header"
import { useNavigate } from "react-router-dom"

export function Cart({}){
    const navigate=useNavigate();
    const {cart,onAddToCart,onDecreaseItem,onRemoveCartItem,total}=useContext(CartContext)

    const onHandlerCheckout=()=>{
        navigate("/checkout")
    }


    return(
        <div >
            <Header/>
            <div className="divCarrito">
            <h1 className="cartTitle">CARRITO</h1>
            {
                <div className="cartContainer">
                {cart.length === 0 && <h3 className="cartVacio">-EL CARRITO ESTÁ VACÍO-</h3>}
                {
                    cart?.length > 0 && cart.map((product)=>(
                        <div key={product.id} className="cartItem">
                            <img className="cartImage"src={product.image} alt="" />
                            <div className="cartDescription">
                            <p className="cartName">{product.name}</p>
                            <p>{product.price} ARS</p>
                            <p className="cartStock">STOCK: {product.stock}</p>
                            <div className="buttonCartSimbol">
                            <button onClick={()=>onDecreaseItem(product.id)}className="cardButtonDecrease">-</button>
                            <p>{product.quantity}</p>
                            <button onClick={()=>onAddToCart(product.id)}className="cardButtonAdd">+</button>
                            </div>
                            <button onClick={()=>onRemoveCartItem(product.id)} className="cardButtonRemove">QUITAR</button>
                            </div>
                                
                        </div>
                    ))
                }
                <div className="cartTotal">
                {
                    cart?.length > 0 && <p className="cartTotalTitle">SUBTOTAL: {total} ARS </p>
                }
                <button className="cartPay" onClick={onHandlerCheckout}>IR A PAGAR</button>
                </div>
                </div> 
            }
            </div>
        </div>
    )
}