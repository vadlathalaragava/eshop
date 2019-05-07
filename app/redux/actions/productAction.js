import {FETCH_PRODUCTS} from '../actions/types';
import {getProducts} from '../../data';

export const fetchProducts=()=>{
    const books = () =>{
       return {
        type:FETCH_PRODUCTS,
        payload:books
       }
    }
}