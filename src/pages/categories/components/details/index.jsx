import "./style.css"
import { CardDetails } from "../cardDetails"
import { useFetch } from "../../../../hooks/useFetch"
import { API_URLS } from "../../../../constants"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../../header"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"

export function Details(){
    const {productId}=useParams();
    const navigate=useNavigate()
    const urlProductDetail=`${API_URLS.PRODUCTS.url}/${productId}`
    const {data, error, loading}= useFetch(urlProductDetail)
    const history=window.history
    const {setProducts, products: productsContext, onAddToCart, cart}= useContext(CartContext);

   
    return(
        <div >
        <Header/>
        <div className="details">
        {history.length >2 ? (<button className="buttonBack" onClick={()=>navigate(-1)}> ← </button>): (null)}
        {loading && <p className="loading">... LOADING</p>}
        <CardDetails {...data}
        onAddToCart={onAddToCart}/>
        </div>
        </div>
    )
}