import * as SessionApiUtils from '../util/session_util_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

const receiveSessionErrors = (errors) => {

    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const login = (user) => dispatch => {
    return SessionApiUtils.login(user)
        .then((user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
            return dispatch(receiveSessionErrors(errors.responseJSON));
        });
};

export const signup = (user) => dispatch => {
    return SessionApiUtils.signup(user)
        .then((user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
            return dispatch(receiveSessionErrors(errors.responseJSON));
    });
};

export const logout = () => dispatch => {
    return SessionApiUtils.logout()
        .then(() => {
        return dispatch(logoutCurrentUser());
    });
};




