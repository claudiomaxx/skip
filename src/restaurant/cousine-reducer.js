import { FETCH_COUSINE } from './cousine-actions'

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_COUSINE:
            return _.mapKeys(action.payload.data, 'id');
            break;

        default:
            break;
    }

    return state;
}