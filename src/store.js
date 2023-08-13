import { configureStore } from "@reduxjs/toolkit";
import homeReducer  from './homeReducer'

 const homeStore = configureStore({
    reducer:{homeReducer  },
})

export default homeStore