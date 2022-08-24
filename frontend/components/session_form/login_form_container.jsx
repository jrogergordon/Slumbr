import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = ({ session, errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processLogin: (user) => dispatch(login(user)),
        processDemoLogin: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(LoginForm);