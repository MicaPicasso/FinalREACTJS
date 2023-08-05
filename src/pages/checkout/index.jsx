import { useContext, useState } from "react";
import { Header } from "../header"
import "./style.css"
import { useForm } from "../../hooks/useForm";
import { CartContext } from "../../context/cartContext";
import { firebaseServices } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const initialState={
    name:{value:'', error:'', hasError: true, active: false, name:"name"},
    apellido:{value:"", error:"", hasError: true, active: false, name:"apellido"},
    document:{value:"", error:"", hasError: true, active: false, name:"document"},
    email:{value:"", error:"", hasError: true, active: false, name:"email"},
    telephone:{value:"", error:"", hasError: true, active: false, name:"telephone"},
    direccion:{value:"", error:"", hasError: true, active: false, name:"direccion"},
    code:{value:"", error:"", hasError: true, active: false, name:"code"},
    isFormValid: false,
}

export function Checkout(){
    // const [active,setActive]=useState(false)
    const navigate=useNavigate();
    const [formState, inputHandler, clearInputs, inputFocus, inputBlur]= useForm(initialState)
    const {cart, total}=useContext(CartContext)
    const [orderCreated, setOrderCreated]=useState(null)


    const onChange=(event)=>{
        const {name,value}= event.target
        inputHandler({name,value})
    }
    
    const onFocus=({name})=>{
        inputFocus({name})
        
    }
    
    const onBlur=({name})=>{
        inputBlur({name})
       
    }
    
    // const inputClass= `container ${active ? "active": ""}`

    const onHandlerOrder = async()=>{
        const newOrder={
            buyer:{
                name: formState.name.value,
                apellido: formState.apellido.value,
                document: formState.document.value,
                telephone: formState.telephone.value,
                direccion: formState.direccion.value,
                code: formState.code.value,
            },
            createdAt: new Date(),
            id:1,
            items: cart,
            payment:{
                currency: "ARS",
                method: "cash",
                type: "cash",
            },
            seller:{
                id:1,
                name: "Juan Perez",
                phone: "12496483",
                email: "juanperez123@hotmail.com"
            },
            shipping:{
                deliveryDate: new Date() + 5,
                trackingNumber: "4j6j54l56434j5",
                type: "DELIVERY"
            },
            total: total,
        }

        const orderId= await firebaseServices.createOrder(newOrder)

        return orderId;
    }



    const onSubmit= async (event)=>{
        event.preventDefault()
        console.log("formState", formState)
        const orderId= await onHandlerOrder();
        setOrderCreated(orderId)
    }

    const navigateEnd=()=>{
            navigate("/end")
    }

    return(
        <>
        <Header/>
        <h1 className="checkouth1">TU COMPRA CASI ESTÁ LISTA</h1>
        <div className="checkout" id="container">
        
        <h2 className="checkoutTitle">&bull; ZANDRA &bull;</h2>
        <div className="underline">
        </div>
        <div className="icon_wrapper">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M200.6 32C205 19.5 198.5 5.8 186 1.4S159.8 3.5 155.4 16L144.7 46.2l-9.9-29.8C130.6 3.8 117-3 104.4 1.2S85 19 89.2 31.6l8.3 25-27.4-20c-10.7-7.8-25.7-5.4-33.5 5.3s-5.4 25.7 5.3 33.5L70.2 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H200.6c-5.4-9.4-8.6-20.3-8.6-32V256c0-29.9 20.5-55 48.2-62c1.8-31 17.1-58.2 40.1-76.1C271.7 104.7 256.9 96 240 96H217.8l28.3-20.6c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3L192.5 55.1 200.6 32zM363.5 185.5L393.1 224H344c-13.3 0-24-10.7-24-24c0-13.1 10.8-24 24.2-24c7.6 0 14.7 3.5 19.3 9.5zM272 200c0 8.4 1.4 16.5 4.1 24H272c-26.5 0-48 21.5-48 48v80H416V256h32v96H640V272c0-26.5-21.5-48-48-48h-4.1c2.7-7.5 4.1-15.6 4.1-24c0-39.9-32.5-72-72.2-72c-22.4 0-43.6 10.4-57.3 28.2L432 195.8l-30.5-39.6c-13.7-17.8-35-28.2-57.3-28.2c-39.7 0-72.2 32.1-72.2 72zM224 464c0 26.5 21.5 48 48 48H416V384H224v80zm224 48H592c26.5 0 48-21.5 48-48V384H448V512zm96-312c0 13.3-10.7 24-24 24H470.9l29.6-38.5c4.6-5.9 11.7-9.5 19.3-9.5c13.4 0 24.2 10.9 24.2 24z"/></svg>
        </div>


        <form onSubmit={onSubmit} action="#" method="post" id="contact_form">
        <div className="section1">  

        <div className="name">
            <label for="name"></label>
            <input onChange={onChange}
                    // className={inputClass}
                    onFocus={()=>onFocus({name:"name"})}
                    onBlur={()=>onBlur({name:"name"})}
                    active={formState.name.active}
                    type="text" placeholder="Nombre" name="name" id="name_input" required/>
        </div>
        <div className="apellido">
            <label for="apellido"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"apellido"})}
                    onBlur={()=>onBlur({name:"apellido"})} 
                    active={formState.apellido.active}
                    type="text" placeholder="Apellido" name="apellido" id="apellido_input" required/>
        </div>
        </div> 
        <div className="section2">
        <div className="documentType">
            <label for="doctype"></label>
            <select placeholder="" name="doctype" id="doctype_input" required>
            <option>DNI</option>
            <option>LC</option>
            <option>LE</option>
            <option>OTRO</option>
            </select>
        </div>
        <div className="document">
            <label for="document"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"document"})}
                    onBlur={()=>onBlur({name:"document"})}
                    active={formState.document.active}
                    type="text" placeholder="" name="document" id="document_input" required/>
        </div>
        </div> 
        <div className="email">
            <label for="email"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"email"})}
                    onBlur={()=>onBlur({name:"email"})}
                    active={formState.email.active}
                    type="email" placeholder="e-mail" name="email" id="email_input" required/>
        </div>
        <div className="telephone">
            <label for="name"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"telephone"})}
                    onBlur={()=>onBlur({name:"telephone"})}
                    active={formState.telephone.active}
                    type="text" placeholder="numero de telefono" name="telephone" id="telephone_input" required/>
        </div>
        <div className="section3">
        <div className="adress">
            <label for="adress"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"direccion"})}
                    onBlur={()=>onBlur({name:"direccion"})}
                    active={formState.direccion.active}
                    type="text" placeholder="dirección" name="direccion" id="adress_input" required/>
        </div>
        <div className="code">
            <label for="code"></label>
            <input onChange={onChange}
                    onFocus={()=>onFocus({name:"code"})}
                    onBlur={()=>onBlur({name:"code"})}
                    active={formState.code.active}
                    type="text" placeholder="codigo postal" name="code" id="code_input" required/>
        </div>
        </div>
        <div className="message">
            <label for="message"></label>
            <textarea name="message" placeholder="COMENTARIOS ADICIONALES PARA LA ENTREGA" id="message_input" cols="30" rows="5" ></textarea>
        </div>
        <div className="submit">
            <input type="submit" value="PAGAR" id="form_button" onClick={navigateEnd()}/>
        </div>
        </form>
        </div>
        </>
    )
}