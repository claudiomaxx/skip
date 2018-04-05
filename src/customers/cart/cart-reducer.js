import { ADD_TO_CART, REMOVE_FROM_CART } from './cart-actions'

export default function (state = {}, action) {
    
    const cartItens = { ...state }

    switch (action.type) {
        case ADD_TO_CART:

            if (!cartItens[action.payload]) {
                cartItens[action.payload] = 0
            }

            cartItens[action.payload]++

            return cartItens;

            break;

        case REMOVE_FROM_CART:

            cartItens[action.payload]--;

            if (cartItens[action.payload] <= 0) {
                delete cartItens[action.payload]
            }

            return cartItens;

        default:
            break;
    }

    return cartItens;
}