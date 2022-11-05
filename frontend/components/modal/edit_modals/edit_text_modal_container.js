import { connect } from 'react-redux';
import CreatePostForm from '../../posts/create_post_form';
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = ({ session, entities, errors }) => {
    return {
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        PostAction: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreatePostForm);