import React from 'react';
import { openModal } from '../../actions/modal_actions';

const PostBar = ({ currentUser, openModal }) => {

    return (
        <>
            <ul className="post_buttons">
                <li onClick={() => openModal('create-text')}>
                    <div><p className="post_button text">Aa</p><span>Text</span></div>
                </li>
                <li onClick={() => openModal('create-text')}>
                    <div><i className="post_button fas fa-camera"></i><span>Photo</span></div>
                </li>
                <li onClick={() => openModal('create-text')}>
                    <div><i className="post_button fas fa-quote-right"></i><span>Quote</span></div>
                </li>
                <li onClick={() => openModal('create-text')}>
                    <div><i className="post_button fas fa-link"></i><span>Link</span></div>
                </li>
            </ul>
        </>
    )
}

export default PostBar;