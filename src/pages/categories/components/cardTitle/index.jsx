import { Header } from "../../../header"
import "./style.css"


export function CardTitle({name,img}){
    
    return(
        <div className="category">
        <Header/>
        <img className="category-image" src={img} alt="" />
        <h1 className="category-title">{name}</h1>  
        </div>
    )
}