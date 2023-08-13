import React, { useRef } from "react"
import homeStore from "./store"
const Y = () =>{
    const product_price = useRef()
    const addfun = () =>{
        const pname = product_price.current.value
        homeStore.dispatch({
            type:'Price_Update',
            payload:pname
        })
    }
    return <>
        <h1> Y Component </h1>
        <p>Product Name : <input type="text" ref={product_price} /> </p>
        <button onClick={addfun}>Add Price </button>
    </>
}

export default Y