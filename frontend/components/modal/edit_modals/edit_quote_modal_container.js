import { connect } from 'react-redux';
import CreateQuotePostForm from '../create_modals/quote_posts/create_quote.jsx';
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

export default connect(mSTP, mDTP)(CreateQuotePostForm);