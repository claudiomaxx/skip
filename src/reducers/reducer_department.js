import _ from 'lodash';
import { CREATE_DEPARTMENT, FETCH_DEPARTMENTS } from '../actions';

export default function (state = {}, action) {

    switch (action.type) {
        case CREATE_DEPARTMENT:
            break;

        case FETCH_DEPARTMENTS:
            return _.mapKeys(action.payload.data, 'id');
    
        default:
            break;
    }

    return state;

};