import { createSlice } from "@reduxjs/toolkit";




const initialState={
    carts:[]
};

const CartSlice=createSlice({
   name:"carts",
   initialState,
   reducers:{
    addToCart(state,action){
        const productIndex=state.carts.findIndex(product=>product.id===action.payload.id)
        if(productIndex>=0){
            state.carts[productIndex].quantity+=1
        }
        else{
            const temp = { ...action.payload, quantity: 1 }
        return {
          ...state,
          carts: [...state.carts, temp],
        }
        }
    },
    deleteFromCart(state,action){
        const data = state.carts.filter((el) => el.id !== action.payload)
      return {
        ...state,
        carts: data,
      }
    },
    deleteItem(state,action){
        const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id)
        if (state.carts[itemIndex_desc].quantity >= 1) {
          const delete_item = (state.carts[itemIndex_desc].quantity -= 1)
          console.log([...state.carts, delete_item])
        } 
          
    }
   }


})
export const ProductsCarts = (state) => {
    return [state.Cart.carts]
    };
export const {
    addToCart,
    deleteFromCart,
    deleteItem


}=CartSlice.actions
export default CartSlice.reducer;
