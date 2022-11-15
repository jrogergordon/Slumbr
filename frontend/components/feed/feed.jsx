import React from 'react';
import { Link } from 'react-router-dom';
import MyLinks from '../my_links';
import PostBar from '../post_bar/post_bar_container.js'
import FeedPosts from '../feed_posts/feed_posts_container.js'

const Feed = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="feed-page">
            <div id="post-bar">
                <PostBar/>
            </div>
            <div className='all-users'>
            </div>
            <div id="all-posts">
                <FeedPosts/>
            </div>
        </div>
    );

    return sessionLinks();
};

export default Feed;