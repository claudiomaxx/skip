import { LOGIN, SIGNUP } from './customer-auth-action'

export default function (state = '', action) {



    switch (action.type) {
        case LOGIN:
            return action.payload;
            break;

        case SIGNUP:
            return action.payload;
            break;

        default:
            break;
    }

    return state;
}