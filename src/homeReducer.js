import { init } from "./init";

const homeReducer = (state=init,action) => {
    switch(action.type){
        case  'Product_Update':
            return {...state,product:action.payload}
        case  'Price_Update':
            return {...state,price:action.payload}
    }
    return state

}

export default homeReducer