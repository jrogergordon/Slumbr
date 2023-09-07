import { connect } from 'react-redux';
import CreateLinkPostForm from './create_link.jsx';
import { createPost } from '../../../../actions/post_actions';
import { closeModal } from '../../../../actions/modal_actions';

const mSTP = ({ session, entities, errors }) => {
    return {
        post: { title: "", content: "", post_type: "link", author_id: entities.users[session.id] },
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        postAction: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreateLinkPostForm);