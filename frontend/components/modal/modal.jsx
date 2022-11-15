import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreatePostContainer from '../posts/create_post_form_container';
import DeleteConfirmContainer from "./delete_confirm/delete_confirm_container";
import CreateQuotePostContainer from "./create_modals/quote_posts/create_quote_container.js";
import CreateLinkPostContainer from "./create_modals/link_posts/create_link_container.js";
import CreatePicPostContainer from "./create_modals/pic_posts/create_pic_container.js"
import EditTextModalContainer from "./edit_modals/edit_text_modal_container.js";
import EditLinkModalContainer from "./edit_modals/edit_link_modal_container.js";
import EditQuoteModalContainer from "./edit_modals/edit_quote_modal_container.js";
import EditPicModalContainer from "./edit_modals/edit_photo_modal.js"

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    if (modal === "create-text") {
        component = <CreatePostContainer/>;
    } else if (modal === "login") {
        component = <LoginFormContainer />;
    } else if (modal === "signup") {
        component = <SignupFormContainer />;
    } else if (modal[0] === "delete_confirm") {
        component = <DeleteConfirmContainer
            post={modal[1]} />;
    } else if (modal[0] === "edit_text") {
        component = <EditTextModalContainer
            post={modal[1]} />;
    } else if (modal === "create-quote") {
        component = <CreateQuotePostContainer />;
    } else if (modal === "create-link") {
        component = <CreateLinkPostContainer />;
    } else if (modal[0] === "edit_link") {
        component = <EditLinkModalContainer
            post={modal[1]} />
    } else if (modal[0] === "edit_quote") {
        component = <EditQuoteModalContainer
            post={modal[1]} />
    } else if (modal === "create-photo") {
        component = <CreatePicPostContainer />
    } else if (modal[0] === 'edit_photo') {
        component = <EditPicModalContainer
            post={modal[1]} />
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