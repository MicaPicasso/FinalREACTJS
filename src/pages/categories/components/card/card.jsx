import "./style.css"



export function Card({id, name, price, image, onShowDetails, onAddToCart}){
    
    return(   
        <div>    
            <div className="cardContainer" onClick={()=>onShowDetails(id)}>
               <img className="imgCard"src={image} alt="" />
               <div className="descriptionCard">
               <h1>{name}</h1>
               <h2>{price} ARS</h2>
               </div>
               
            </div>
            {/* <button onClick={()=>onAddToCart(id)}>ES PRUEBA</button> */}
        </div> 
    )
}