import { merge } from 'lodash';

import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/post_actions';


const postsReducer = (state = {}, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
            return merge({}, state, { [action.post.id]: action.post});
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return state;
    };
};

export default postsReducer;