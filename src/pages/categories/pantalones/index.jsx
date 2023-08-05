import { CardTitle } from "../components/cardTitle"
import { Card } from "../components/card/card"
import img from "../multimedia/pantalones.png"
import { useFetch } from "../../../hooks/useFetch"
import "../style.css"
import { CardDetails } from "../components/cardDetails"
import {useEffect, useState} from "react"
import { Details } from "../components/details"
import { useNavigate } from "react-router-dom"
import { API_URLS } from "../../../constants"
import { useParams } from "react-router-dom"
import { InputSearch } from "../../header/components/inputSearch"
import { Footer } from "../../footer"
import { CartContext } from "../../../context/cartContext"
import { useContext } from "react"

export function Pantalones(){
    


// para hacer el renderizado condicional  
// const [products, setProducts]=useState([])
const navigate=useNavigate();
const [showDetails, setShowDetails]=useState(false)
const [productDetail, setProductDetail]=useState(null);
const [search, setSearch]= useState("");
const [active, setActive]= useState(false);
const {productId}=useParams()
const [productFiltered, setProductFiltered]=useState([])
const {setProducts, products: productsContext, onAddToCart, cart}= useContext(CartContext);

const {data: products, error, loading}= useFetch(API_URLS.PRODUCTS.url)



console.log(productId);

useEffect(()=>{
    if(products?.length >0){
        setProducts(products)
    }
},[products,setProducts])

const filterBySearch=(query)=>{
 let updateProductList= [... products]

 updateProductList= updateProductList.filter((item)=>{
    return item.name.toLowerCase().indexOf(query.toLowerCase()) != -1
 })
 setProductFiltered(updateProductList)
}

const onChange=(event)=>{
    const value= event.target.value;
    setSearch(value);
    filterBySearch(value)
}

const onFocus=()=>{
    setActive(true);
}

const onBlur=()=>{
    setActive(false);
}

const onShowDetails=(id)=>{
    navigate(`/clothes/${id}`)
}



    return(
        <div>
            <div>
                <CardTitle 
                    name="PANTALONES | JEANS"
                    img={img}
                />
                <InputSearch 
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                 /> 

      



                {loading && <p className="notFound">...Loading</p> }
                {search.length > 0  && productFiltered.length === 0 && <h3 className="notFound">-PRODUCT NOT FOUND-</h3>}
                <div className="container">
                {
                    search.length >0 ? (
                        productFiltered.map((product)=>(
                            <Card {... product}
                            key={product.id}
                            onShowDetails={onShowDetails}
                            onAddToCart={onAddToCart}
                           />
                        ))
                    ) : (
                        products.map((product)=>(
                            <Card {... product}
                            key={product.id}
                            onShowDetails={onShowDetails}
                            onAddToCart={onAddToCart}
                            />
                       ))
                    )
                   
                }
                </div>
            </div>
            <Footer />
        </div>
    )
}