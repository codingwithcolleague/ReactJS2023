import React, { useRef } from "react"
import homeStore from "./store"
const X = () =>{
    const product_name = useRef()
    const addfun = () =>{
        const pname = product_name.current.value
        homeStore.dispatch({
            type:'Product_Update',
            payload:pname
        })
    }
    return <>
        <h1> X Component </h1>
        <p>Product Name : <input type="text" ref={product_name} /> </p>
        <button onClick={addfun}>Add Product </button>
    </>
}

export default X