import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities, errors }) => {
    return {
        post: { title: "", content: "", post_type: "text", author_id: entities.users[session.id] },
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        PostAction: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreatePostForm);