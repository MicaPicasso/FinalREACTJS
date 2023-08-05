import "./style.css"

export function CardDetails({id,image,name,stock,price, description, onAddToCart}){
  
    
    return(
        <div className="cardDetails">
           <img src={image} className="cardDetailsImage"alt="" />
           <div className="cardDetailsText">
           <h1>{name}</h1>
            <h2>{price} ARS</h2>
            <h3>{description}</h3>         
            <h4>STOCK: {stock}</h4>
            <button className="addToCart"onClick={()=>onAddToCart(id)}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}