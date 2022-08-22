import React from 'react';
// import PostNavContainer from '../post_nav/post_nav_container';
// import NavbarContainer from '../navbar/navbar_container';
// import PostIndexContainer from '../posts/post_index_container';
// import Avatar from '../avatar/avatar';
// import AboutMe from '../greeting/about-me';
// import ExploreIndexItem from '../explore/explore_index_item_container';
// import UserMini from '../avatar/user-mini';
// import Modal from '../modal/modal';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }
}