import "./style.css"
import { MenuDesplegable } from "./components/menu"
import { CartWidget } from "./components/cartWidget"
import { InputSearch } from "./components/inputSearch/index"
import { useState, useEffect } from "react"
// import { useFetch } from "../../hooks/useFetch"
import { useNavigate, NavLink } from "react-router-dom"


export function Header(){
    const navigate= useNavigate()
    const [search, setSearch]= useState("");
    const [active, setActive]= useState(false);
   

    // const {data: products, loading, error}=useFetch()


    // const onChange=(event)=>{
    //     const value= event.target.value;
    //     setSearch(value);
    // }

    // const onFocus=()=>{
    //     setActive(true);
    // }

    // const onBlur=()=>{
    //     setActive(false);
    // }

    const showProducts=()=>{
        navigate("../buscar/index")
    }
     
   


    return(
        <section className="header">
        {/* menu */}
        <MenuDesplegable/>
        <h1 className="title-navBar"><NavLink className="title-navBar" to="/">ZANDRA</NavLink> </h1>
        {/* <InputSearch 
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
           
        />   */}

        {/* {loading && <p>Loading...</p>} */}
        <CartWidget/>
        {/* {
            products.map((product)=>(
                <div key={product.id}>
                <p>{product.title}</p>
                </div>
            ))
        } */}
        </section>
       
    )
}