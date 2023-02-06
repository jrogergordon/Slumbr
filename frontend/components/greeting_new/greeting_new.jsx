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
        <hgroup className="loggedout">
            <div className='loggedin'>
                <button className="header-button-logout" onClick={logout}>Log Out</button>
            </div>

            <div className='nav-bar-credit-links'>
                <div>
                    <a href="https://angel.co/u/jacob-roger-gordon"><img className="credits" src={window.angelist} /></a>
                </div>
                <div>
                    <a href="https://github.com/jrogergordon"><img className="credits" src={window.github} /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jacobrogergordon/"><img className="credits" src={window.linkedIn} /></a>
                </div>
            </div>

            {/* <div className='content-links'>
                <div>
                    <Link to="/feed"><img className="directory" src={window.following} /></Link>
                </div>
                <div>
                    <Link to="/explore"><img className="directory" src={window.explore} /></Link>
                </div>
            </div> */}

        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default GreetingNew;