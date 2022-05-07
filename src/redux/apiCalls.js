import { loginStart, loginFailure, loginSuccess, registerStart, registerSuccess, registerFailure, } from "./userRedux"
import { publicRequest, userRequest } from "../requestMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess } from "./clientRedux";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post('/auth/login',user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure());
    }
}
export const register = async (dispatch, user)=>{
    dispatch(registerStart());
    try {
        const res= await publicRequest.post('/auth/register', user)
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure());
    }
}
export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try {
        const res= await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure());
    }
}
export const deleteProduct = async (id,dispatch)=>{
    dispatch(deleteProductStart());
    try {
        const res= await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}
export const updateProduct = async (id , product , dispatch)=>{
    dispatch(updateProductStart());
    try {
        const res= await userRequest.put(`/products/${id}`, product)
        console.log(product)
        dispatch(updateProductSuccess({id,product }))
        console.log(res.data)
    } catch (error) {
        dispatch(updateProductFailure());
        console.log(error)
    }
}
export const addProduct = async (product , dispatch)=>{
    dispatch(addProductStart());
    try {
        const res= await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure());
        console.log(error)
    }
}

export const getUsers = async (dispatch)=>{
    dispatch(getUserStart());
    try {
        const res= await userRequest.get('/users')
        dispatch(getUserSuccess(res.data))
    } catch (error) {
        dispatch(getUserFailure());
        console.log(error)

    }
}

export const deleteUser = async (id,dispatch)=>{
    dispatch(deleteUserStart());

    try {

        const res= await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure());
        console.log(error)
        
    }
}

//  For carts

