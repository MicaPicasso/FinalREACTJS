import "./style.css"
import { Header } from "../header"

export function End(){
    return(
        <div>
            <Header/>
            <h1 className="endTitle">¡LISTO! <br/>- TU COMPRA ESTA SIENDO PROCESADA -</h1>
        </div>
    )
}