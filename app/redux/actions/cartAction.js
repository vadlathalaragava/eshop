import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from '../actions/types';

export const addToCart= (item)=>{
    return {
        type:ADD_TO_CART,
        payload:item
    }
}


export const removeItem = (item)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:item
    }
}

export const emptyCart = ()=>{
    return {
        type:EMPTY_CART
    }

}


