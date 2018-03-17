import { ADD_TO_CART, REMOVE_FROM_CART } from './cart-actions'

export default function (state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            return [ ...state, action.payload ];
            break;

        case REMOVE_FROM_CART:
            console.log('not available yet')

        default:
            break;
    }

    return state;
}