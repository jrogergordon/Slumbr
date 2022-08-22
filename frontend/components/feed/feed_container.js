import { connect } from 'react-redux';
import Feed from './feed';
import { fetchAllUsers } from '../../actions/entities/user_actions';
// import { follow, unfollow } from '../../actions/entities/follow_actions';
// import { likePost, unlikePost } from '../../actions/entities/like_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    // followings = currentUser.followings;
    const posts = Object.values(state.entities.posts);
    const allPosts = state.entities.posts;
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser,
        allUsers: Object.values(state.entities.users),
        allPosts,
        posts,
        users: state.entities.users
    };
};

const mdp = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        // follow: (user) => dispatch(follow(user)),
        // unfollow: (user) => dispatch(unfollow(user)),
        // likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        // unlikePost: (postId) => dispatch(unlikePost(postId)),
        openModal: (modal, postId) => dispatch(openModal(modal, postId))
    };
};

export default connect(msp, mdp)(Feed);


