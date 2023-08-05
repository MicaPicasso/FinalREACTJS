import { useReducer } from "react"

const INPUTACTIONS={
    INPUT_CHANGE: "INPUT_CHANGE",
    CLEAR_INPUTS: "CLEAR_INPUTS",
    SET_DATA:"SET_DATA",
    INPUT_FOCUS: "INPUT_FOCUS",
    INPUT_BLUR: "INPUT_BLUR"
}


const formReducer=(state, action)=>{
    switch(action.type){
        case INPUTACTIONS.INPUT_CHANGE:
            const{name, value, error, hasError, isFormValid, active}=action.data;
            return{
                ...state,
                [name]:{
                    value,
                    error,
                    hasError,
                    active,
                },
                isFormValid,
            }
            case INPUTACTIONS.INPUT_FOCUS:
                return{
                    ...state,
                    [action.data.name]:{
                        ...state[action.data.name],
                        active:true,
                    }
                }
            case INPUTACTIONS.INPUT_BLUR:
                return { ...state,
                [action.data.name]:{
                    ...state[action.data.name],
                    active: false,
                }
            }
            case INPUTACTIONS.CLEAR_INPUTS:
                return action.data;
           
            default:
                return state;
    }
}

export const useForm = (initialState)=>{
    const [formState, dispatchFormState]= useReducer(formReducer, initialState)

    const inputHandler=({name, value })=>{
        // let isFormValid= true;

        // for(const key in formState){
        //     const item=formState[key]
        //     if(key != name && hasError){
        //         isFormValid=false;
        //         break;
        //     }else if(key !=name && item.hasError){
        //         isFormValid=false;
        //         break;
        //     }
        // }
        // const {error, hasError }=validateInput({type:name, value})
        dispatchFormState({
            type: INPUTACTIONS.INPUT_CHANGE,
            data:{
                name,
                value,
                // error,
                // hasError,
                // isFormValid,
                // active:true
            }
        })
    }

    const clearInputs=({formState})=>{
        dispatchFormState({
            type: INPUTACTIONS.CLEAR_INPUTS,
            data: formState,
        })
    }


    const inputFocus=({name})=>{
        dispatchFormState({
            type: INPUTACTIONS.INPUT_FOCUS,
            data:{
                name,
            
            }
        })
    }

    const inputBlur=({name})=>{
        dispatchFormState({
            type:INPUTACTIONS.INPUT_BLUR,
            data: {
                name,
               
            }
        })
    }

    return[formState, inputHandler, clearInputs, inputFocus, inputBlur ]
}