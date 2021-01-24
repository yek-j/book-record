import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    BOOK_RECORD
} from '../_actions/types';

function user(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
             return { ...state, register: action.payload }
             break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        case BOOK_RECORD:
            return { ...state, recordSuccess: action.payload}
            break;
        default:
            return state;
    }
}

export default user;