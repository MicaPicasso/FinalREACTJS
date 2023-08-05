const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;

export const validateInput= ({type,value})=>{
    let hasError=false;
    let error="";
    const formatValue = value.trim()


    switch(type){
        case "name":
            if(formatValue === ""){
                hasError=true
                error="name is required"
            }else if(!nameRegex.text(formatValue)){
                hasError= true;
                error= "name is invalid"
            }else{
                hasError= false;
                error=""
            }
            break;
            default:
                hasError=false;
                error="";
                break;
    }

    return{hasError, error}
}