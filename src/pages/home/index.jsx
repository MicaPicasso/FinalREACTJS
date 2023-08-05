import "./style.css"
import { Header } from "../header"
import { Slider } from "./components/slider"
import { Map } from "./components/map"
import { Footer } from "../footer"

// necesario para traer los productos
// import { useFetch } from "../../hooks/useFetch"



export function Home(){
    // necesario para traer los productos
    // const {data: products, loading, error}=useFetch()



    return(
    <div>
       <Header/>
       <Slider/>
        {/* // necesario para traer los productos */}
       {/* {loading && <p>Loading...</p>}
       {
            products.map((product)=>(
                <div key={product.id}>
                <p>{product.title}</p>
                </div>
            ))
        } */}
       
       <Map/>
       <Footer/>
      
    </div>
    )
}