import {ADD_ORDER} from '../actions/types';

export const addOrder = (data) =>{
    return{
        type:ADD_ORDER,
        payload:data
    }
}