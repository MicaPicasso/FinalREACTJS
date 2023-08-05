import { useCallback, useEffect, useState } from "react"
// 'https://dev-k6bmtu6qoyiramu.api.raw-labs.com/4'
export const useFetch=(url)=>{
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null)


    const handleFetch= useCallback(
        async ()=>{
            try{
                const response= await fetch(url)
                if(!response.ok) throw new Error("Algo salió mal")
                const responseData= await response.json()
                setData(responseData)
            }
            catch(error){
                setError(error.message)
               
            }finally{
                setLoading(false)
            }
        },
        [],
    )
       

    useEffect(()=>{
        if(data.length === 0) handleFetch()



        // fetch('https://dev-k6bmtu6qoyiramu.api.raw-labs.com/4')
        //     .then((response)=>response.json())
        //     .then((data)=> setData(data))
        //     .catch((error)=>console.error(error))
    }, [])

    return{
        data,
        loading,
        error,
    }
}
