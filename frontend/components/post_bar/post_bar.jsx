import React from 'react';
import { openModal } from '../../actions/modal_actions';

const PostBar = ({ currentUser, openModal }) => {

    return (
        <>
            <ul className="post_buttons">
                <li onClick={() => openModal('create-text')}>
                    <div>
                        <img className="post-button-text" src={window.theT} />
                        <span className="post-bar-words">Text</span>
                    </div>
                </li>
                    <div className='post-bar-div-box' />
                <li onClick={() => openModal('create-photo')}>
                    <div>
                        <img className="post-button-text"  src={window.cameraLogo} />
                        <span className="post-bar-words">Photo</span>
                    </div>
                </li>
                <div className='post-bar-div-box' />
                <li onClick={() => openModal('create-quote')}>
                    <div>
                        <img className="post-button-text" src={window.quoteLogo} />
                        <span className="post-bar-words">Quote</span>
                    </div>
                </li>
                <div className='post-bar-div-box' />
                <li onClick={() => openModal('create-link')}>
                    <div>
                        <img className="post-button-text" src={window.link} />
                        <span className="post-bar-words">Link</span>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default PostBar;