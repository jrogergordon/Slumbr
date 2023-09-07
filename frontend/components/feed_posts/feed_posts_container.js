import { connect } from 'react-redux';
import FeedPosts from './feed_posts';
import { fetchAllPosts, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = ( state ) => {
    const posts = Object.values(state.entities.posts);
    const users = Object.values(state.entities.users);
    return {
        posts: posts,
        users: users,
    }
};

const mDTP = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchAllUsers: ()=> dispatch(fetchAllUsers()),
});

export default connect(mSTP, mDTP)(FeedPosts);
