import React from "react"
import "./style.css"

export function InputSearch({onFocus,onChange,onBlur}){
    return(
    <input 
    id="search" 
    type="text" 
    placeholder="BUSCAR"
    onFocus={onFocus}
    onChange={onChange} 
    onBlur={onBlur}
    />
    )
}