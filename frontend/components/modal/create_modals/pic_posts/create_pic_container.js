import { connect } from 'react-redux';
import CreatePicPostForm from './create_pic.jsx';
import { createMediaPost } from '../../../../actions/post_actions';
import { closeModal } from '../../../../actions/modal_actions';


const mSTP = ({ session, entities, errors }) => {
    return {
        post: { title: "", content: "", post_type: "photo", author_id: entities.users[session.id] },
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        postAction: (post) => dispatch(createMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreatePicPostForm);