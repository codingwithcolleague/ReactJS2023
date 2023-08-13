import React, { useRef } from "react"
import { connect } from 'react-redux'

let Z = (props) =>{
    return <div>
            <h1> Z component </h1>
            <h1> Product Name : {  props.product} </h1>
            <h1> Product Price : {  props.price} </h1>

        </div>
}

Z = connect((state)=>{
const { product,price } = state.homeReducer
return {product,price}
},(dispatch)=>{
    return {}
})(Z)
export default Z

