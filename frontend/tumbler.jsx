import React from "react";
import { login, signup, logout } from './actions/session_actions';
import { receiveCurrentUser } from './actions/session_actions'
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    window.getState = store.getState;
    window.dispatch = store.dispatch;



    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
