import * as PostApiUtil from '../util/post_api_util';
import * as MediaApiUtil from '../util/media_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";


const receiveAllPosts = (posts) => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

export const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (id) => {
    return {
        type: REMOVE_POST,
        postId: id
    }
}

export const fetchAllPosts = () => dispatch => {
    return PostApiUtil.fetchAllPosts().then((posts) => {
        return dispatch(receiveAllPosts(posts));
    });
};

export const fetchPost = (id) => dispatch => {
    return PostApiUtil.fetchPost(id).then((post) => {
        return dispatch(receivePost(post));
    });
};

export const createPost = (post) => dispatch => {
    return PostApiUtil.createPost(post).then((post) => {
        dispatch(receivePost(post));
    });
};

export const updatePost = (post) => dispatch => {
    return PostApiUtil.updatePost(post).then((post) => {
        return dispatch(receivePost(post));
    });
};

export const deletePost = (id) => dispatch => {
    return PostApiUtil.deletePost(id).then(() => {
        return dispatch(removePost(id));
    });
};

export const likePost = id => dispatch => {
    return PostApiUtil.createLike(id)
        .then(post => dispatch(receivePost(post)));
};

export const unlikePost = id => dispatch => {
    return PostApiUtil.deleteLike(id)
        .then(post => dispatch(receivePost(post)));
};

export const createMediaPost = (formData) => dispatch => {
    return MediaApiUtil.createMediaPost(formData).then((post) => {
        return dispatch(receivePost(post.post))
    })
}

export const editMediaPost = (formData, post) => dispatch => {
    return MediaApiUtil.editMediaPost(formData, post).then((post) => {
        return dispatch(receivePost(post))
    })
}
