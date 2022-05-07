import {createSlice} from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total: 0,
    },
    reducers: {
        addProduct: (state,action) =>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity;
        },
        removeProduct: (state,action) =>{
            state.quantity -= 1;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload.id),
                 1
              );
            state.total -= action.payload.price * action.payload.quantity;
        },
        removeAllProducts: (state) =>{
            state.quantity = 0;
            state.products=[]
            state.total = 0;
        },
        updateProduct:(state,action)=>{
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)
              ] = action.payload.product;
        }
    },
});
export const {addProduct, removeProduct, removeAllProducts, updateProduct} = cartSlice.actions;
export default cartSlice.reducer;