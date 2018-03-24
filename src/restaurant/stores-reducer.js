import { FETCH_STORES } from './stores-actions'

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_STORES:
            return _.mapKeys(action.payload.data, 'id');
            break;

        default:
            break;
    }

    return state;
}