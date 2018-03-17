import { ORDER, ORDER_LIST } from './order-actions'

export default function (state = [], action) {

    switch (action.type) {
        case ORDER_LIST:            
            return action.payload;            
            break;

        default:
            break;
    }

    return state;
}