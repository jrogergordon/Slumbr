import React from 'react';
import { Link } from 'react-router-dom';



const GreetingNew = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="loggedout">
            <div className="loggedout-buttons">
                <button className="header-button-login">
                    <Link to="/login">Log in</Link>
                </button>
                <button className='header-button-signup'>  
                    <Link to="/signup">Sign up!</Link>
                </button>
            </div>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className='loggedin'>
                <button className="header-button-logout" onClick={logout}>Log Out</button>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default GreetingNew;