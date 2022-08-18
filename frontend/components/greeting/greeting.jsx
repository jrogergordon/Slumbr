import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    let backgroundImage = <img className="background-image" src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg" />;

    const sessionLinks = () => (
        <div className="greeting">
            <nav className="greeting-logged-out">
                {backgroundImage}
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </nav>
        </div>
    );
    const personalGreeting = () => (
        <div className="greeting">
            <hgroup className="greeting-loggedin">
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <button className="greeting-button" onClick={logout}>Log Out</button>
            </hgroup>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;