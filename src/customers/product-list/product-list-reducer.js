import { FETCH_PRODUCTS } from './product-list-actions'

export default function (state = {}, action) {    

    switch (action.type) {
        case FETCH_PRODUCTS:
            return _.mapKeys(action.payload.data, 'id');
            break;

        default:
            break;
    }

    return state;
}