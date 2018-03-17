export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCartAction(product) {

    return {
        type: ADD_TO_CART,
        payload: product
    }

}

export function removeFromCartAction(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}
