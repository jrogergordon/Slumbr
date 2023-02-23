import React from 'react';
import { withRouter } from 'react-router';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

class FeedPostsItem extends React.Component {
    constructor(props) {
        super(props) 

        this.likeButton = this.likeButton.bind(this);
        this.renderFollow = this.renderFollow.bind(this);
        this.renderDeleteButtons = this.renderDeleteButtons.bind(this);
        this.render = this.render.bind(this);

    }

 
    likeButton() {
        if (this.props.post.author_id !== this.props.currentUserId) {
            if (this.props.post.liked) {
                return (
                    <div className="like-btn-on" onClick={() => this.props.unlikePost(this.props.post.id)}>
                        <AiFillLike size={20} /> Likes: {this.props.post.likes}
                    </div>
                );
            } else {
                return (
                    <div className="like-btn-off" onClick={() => this.props.likePost(this.props.post.id)}>
                        <AiOutlineLike size={20} /> Likes: {this.props.post.likes}
                    </div>
                );
            }
        }
    }

    renderFollow() {
        if (this.props.post.author_id !== this.props.currentUserId) {
            if (this.props.post.followed) {
                return (
                    <button
                        className='button'
                        id='unfollow-button'
                        onClick={() => this.props.unfollowUser(this.props.post.author_id)}>
                        Unfollow
                    </button>
                );
            } else {
                return (
                    <button
                        className='button'
                        id='follow-button'
                        onClick={() => this.props.followUser(this.props.post.author_id)}>
                        Follow
                    </button>
                );
            }
        }
    }

    renderDeleteButtons() {
        if (this.props.post.author_id === this.props.currentUserId) {
            if (this.props.post.post_type === "quote") {
                return (
                    <div>
                        <button className="delete-post-button"
                            onClick={() => this.props.openModal(["delete_confirm", this.props.post])} >
                            &nbsp; <img className='trash-button' src={window.trash} />
                        </button>
                        <button className='edit-post-button'
                            onClick={() => this.props.openModal(["edit_quote", this.props.post])} >
                            <img className='trash-button' src={window.edit} />
                        </button>
                        Likes: {this.props.post.likes}
                    </div>
                );
            } else if (this.props.post.post_type === "text") {
                return (
                    <div>
                        <button className="delete-post-button"
                            onClick={() => this.props.openModal(["delete_confirm", this.props.post])} >
                            &nbsp; <img className='trash-button' src={window.trash} />
                        </button>
                        <button className='edit-post-button'
                            onClick={() => this.props.openModal(["edit_text", this.props.post])} >
                            <img className='trash-button' src={window.edit} />
                        </button>
                        Likes: {this.props.post.likes}
                    </div>
                )
            } else if (this.props.post.post_type === "link") {
                return (
                <div>
                    <button className="delete-post-button"
                        onClick={() => this.props.openModal(["delete_confirm", this.props.post])} >
                        &nbsp; <img className='trash-button' src={window.trash} />
                    </button>
                        <button className='edit-post-button'
                            onClick={() => this.props.openModal(["edit_link", this.props.post])} >
                            <img className='trash-button' src={window.edit} />
                        </button>
                        Likes: {this.props.post.likes}
                </div>
                )
            } else if (this.props.post.post_type === "photo") {
                return (
                    <div>
                        <button className="delete-post-button"
                            onClick={() => this.props.openModal(["delete_confirm", this.props.post])} >
                            &nbsp; <img className='trash-button' src={window.trash} />
                        </button>
                        <button className='edit-post-button'
                            onClick={() => this.props.openModal(["edit_photo", this.props.post])} >
                            <img className='trash-button' src={window.edit} />
                        </button>
                        Likes: {this.props.post.likes}
                    </div>
                );
            }
        }
    }

    renderPost() {
        if(this.props.post.post_type === "quote") {
            return (
                <div className="post-content">
                    <h3 className="quote-post-body">
                        "{this.props.post.content}"
                    </h3>
                    <p readOnly className="quote-post-title">
                       &nbsp; &nbsp; &nbsp; -{this.props.post.title}
                    </p>
                </div>
            );
        } else if (this.props.post.post_type === "text") {
            return (
                <div className="post-content">
                    <h3 className="post-title">
                        {this.props.post.title}
                    </h3>
                    <p readOnly className="post-body">
                        {this.props.post.content}
                    </p>
                </div>
            );
        } else if (this.props.post.post_type === "link") {
            if(this.props.post.title.length > 0) {
                return (
                    <a wrap="hard" className='post-link' href={this.props.post.content}>{this.props.post.title}</a>
                )
            } else return (
                <a wrap="hard" className='post-link' href={this.props.post.content}>{this.props.post.content}</a>
            );
        } else if (this.props.post.post_type === "photo") {
            return (
                <div className='post-content'>
                    <div className='photo-post-title'>
                        {this.props.post.title}
                    </div>

                    <img className='photo-post-img' src={this.props.post.photoUrl} />

                    <div className='photo-post-content'>
                        {this.props.post.content}
                    </div>
                </div>
            )
        }
    }

    render() {
        let avtUrl;
        if (this.props.users.length < 10) {
            return "";
        } else {
            switch (this.props.users[(this.props.post.author_id) - 1].avatar_image) {
                case "G":
                    avtUrl = window.avtGlenn;
                    break;
                case "D":
                    avtUrl = window.avtDog;
                    break;
                case "C":
                    avtUrl = window.avtCows;
                    break;
                case "O":
                    avtUrl = window.avtOctopus;
                    break;
                case "P":
                    avtUrl = window.avtPizza;
                    break;
                case "R":
                    avtUrl = window.avtPrincess;
                    break;
                case "B":
                    avtUrl = window.avtRobot;
                    break;
                case "S":
                    avtUrl = window.avtSword;
                    break;
                case "T":
                    avtUrl = window.avtTurtle;
            }       




        
        return (
            <div className='feed-post-container'>
                <div className="feed-post-item">
                    <div className='user-avatar'>
                        <img id="post-avatar" 
                            src={avtUrl} />
                    </div>
                    <div className='avatar-post-space'>
                    </div>
                    <li className="feed-item">
                        <div className="post-text">
                            <div className="post-header">
                                <p className='post-author'>{this.props.users[(this.props.post.author_id) - 1].username} {this.renderFollow()}</p>
                               
                            </div>
                            {this.renderPost()}
                            {/* <div className="post-content">
                                <h3 className="post-title">
                                    {this.props.post.title}
                                </h3>
                                <p readOnly className="post-body">
                                    {this.props.post.content}
                                </p>
                            </div> */}

                            <div className="post-footer">
                                {this.likeButton()}
                                <div className="delete-my-post">
                                    {this.renderDeleteButtons()}
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div id="space-between-posts" />
            </div>
        );
    }
    }
}

export default FeedPostsItem;
//