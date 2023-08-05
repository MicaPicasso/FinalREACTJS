import "./style.css"
import img1 from "../multimedia/image1.jpg"


export function Slider(){
    return(  
    <div>
      <img src={img1} className="animate__animated animate__slideInUp" alt="" />
    </div>    
    )
}