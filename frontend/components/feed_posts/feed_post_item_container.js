import { connect } from 'react-redux';
import FeedPostItem from './feed_post_item';
import { deletePost } from '../../actions/post_actions';

const mSTP = (state) => {
    return {
        currentUserId: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

export default connect(mSTP, mDTP)(FeedPostItem);