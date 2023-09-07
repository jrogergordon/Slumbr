import { connect } from 'react-redux';
import CreateLinkPostForm from '../create_modals/link_posts/create_link.jsx';
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
        postAction: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreateLinkPostForm);