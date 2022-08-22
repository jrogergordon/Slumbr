import React from 'react';
import { Link } from 'react-router-dom';
import MyLinks from '../my_links';

const Greeting = ({ currentUser, logout, openModal }) => {
    let backgroundImage = <img className="background-image" src="https://wallpaperaccess.com/full/112722.jpg" />;

    const sessionLinks = () => (
        <div className="greeting">
            {backgroundImage}
            <div id="greeting">
            <h1 className="tumbler">Tumbler</h1>
            <nav className="greeting-logged-out">
                    <button id="greeting-login" onClick={() => openModal('login')}>Login</button>
                    <button id="greeting-signup" onClick={() => openModal('signup')}>Signup</button>
                {/* <Link id="greeting-login" to="/login">Login</Link>
                <Link id="greeting-signup" to="/signup">Sign up!</Link> */}
            </nav>
            </div>
            <MyLinks />
        </div>
    );

    return sessionLinks();
};

export default Greeting;