import { FETCH_STORES, FETCH_STORES_BY_COUSINE } from './stores-actions'

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_STORES:
        case FETCH_STORES_BY_COUSINE:
            return _.mapKeys(action.payload.data, 'id');
            break;

        default:
            break;
    }

    return state;
}