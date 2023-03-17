import { combineReducers } from "redux";
import products from './slices/productSlice'
import Cart from './slices/CarteSlice'



const reducers=combineReducers({
    products,
    Cart
})

export default reducers