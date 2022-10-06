import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreatePostContainer from '../posts/create_post_form_container';
import DeleteConfirmContainer from "./delete_confirm/delete_confirm_container"

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    if (modal === "create-text") {
        component = <CreatePostContainer postType="text" />;
    } else if (modal === "login") {
        component = <LoginFormContainer />;
    } else if (modal === "signup") {
        component = <SignupFormContainer />;
    } else if (modal[0] === "delete_confirm") {
        component = <DeleteConfirmContainer
            post={modal[1]} />;
    } else if (modal[0] === "edit-text") {
        component = <EditContainer
            post={modal[1]} />;
    }
    
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);