import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


export default function modalReducer(state = null, action) {
    // console.log(action)
    // console.log("modalReducer")
    // console.log(RECEIVE_CURRENT_USER)
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_POST:
            return null;
        case REMOVE_POST:
            return null;
        case RECEIVE_CURRENT_USER:
            // console.log('sign')
            return null;
        default:
            return state;
    };
};