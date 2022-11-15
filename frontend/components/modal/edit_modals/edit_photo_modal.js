import { connect } from 'react-redux';
import CreatePhotoPostForm from '../create_modals/pic_posts/create_pic.jsx';
import { editMediaPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = ({ session, entities, errors }) => {
    return {
        errors: errors.session,
        currentUser: entities.users[session.id],
    };
};

const mDTP = dispatch => {
    return {
        postAction: (post) => dispatch(editMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(CreatePhotoPostForm);