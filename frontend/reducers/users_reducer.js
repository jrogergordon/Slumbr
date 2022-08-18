import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            Object.assign({}, state, { id: action.user.id })
        default:
            return state;
    }
}

export default usersReducer;