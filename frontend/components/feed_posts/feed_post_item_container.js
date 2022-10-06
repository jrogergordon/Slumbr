import { connect } from 'react-redux';
import FeedPostItem from './feed_post_item';
import { deletePost, 
        likePost,
        unlikePost,} from '../../actions/post_actions';
import { unfollowUser, followUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        currentUserId: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        likePost: id => dispatch(likePost(id)),
        unlikePost: id => dispatch(unlikePost(id)),
        unfollowUser: id => dispatch(unfollowUser(id)),
        followUser: id => dispatch(followUser(id)),
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mSTP, mDTP)(FeedPostItem);