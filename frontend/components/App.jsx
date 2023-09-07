import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingNewContainer from "./greeting_new/greeting_new_container.js"
import FeedContainer from './feed/feed_container';
import Modal from './modal/modal';

// import FeedContainer from "./feed/feedContainer";

const App = () => (
    <div>
        <Modal />
        <div className='header'>
            <GreetingNewContainer/>
        </div>
        <Switch>
            <Route path="/feed" component={FeedContainer} />
            <AuthRoute path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;