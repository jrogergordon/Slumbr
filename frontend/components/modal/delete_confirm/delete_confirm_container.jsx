import { connect } from 'react-redux';
import DeleteConfirm from './delete_confirm.jsx';
import { deletePost } from '../../../actions/post_actions.js';
import { closeModal } from '../../../actions/modal_actions.js';

const mSTP = ({ session, entities, errors }) => {
    return {
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(DeleteConfirm);