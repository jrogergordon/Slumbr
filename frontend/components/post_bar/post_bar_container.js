import { connect } from 'react-redux';
import PostBar from './post_bar';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(PostBar)