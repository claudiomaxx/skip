import axios from 'axios'

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCartAction(productId) {

    return {
        type: ADD_TO_CART,
        payload: productId
    }

}

export function removeFromCartAction(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}
