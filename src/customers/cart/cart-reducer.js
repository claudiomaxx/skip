import { ADD_TO_CART, REMOVE_FROM_CART } from './cart-actions'

export default function (state = [], action) {

    console.log(action);
    

    switch (action.type) {
        case ADD_TO_CART:
            
            if (state.indexOf(action.payload) === -1) {
                return [ ...state, action.payload ];            
            }
            
            break;

        case REMOVE_FROM_CART:
            console.log('not available yet')

        default:
            break;
    }

    return state;
}