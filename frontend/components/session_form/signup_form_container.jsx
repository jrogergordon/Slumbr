import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions'
import SignupForm from './signup_form';


const mSTP = ({ session, errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemoLogin: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
    
};

export default connect(mSTP, mDTP)(SignupForm);
