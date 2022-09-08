import React from 'react';
import { withRouter } from 'react-router';

class FeedPostsItem extends React.Component {
    constructor(props) {
        super(props) 

    }

    renderDeleteButtons() {
        if (this.props.post.author_id === this.props.currentUserId) {
            return (
                <button className="delete-post-button"
                    onClick={() => this.props.deletePost(this.props.post.id)} >
                    <img className='trash-button' src={window.trash}/>
                </button>
            );
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
                                <p className='post-author'>{this.props.users[(this.props.post.author_id) - 1].username}</p>
                            </div>
                            <div className="post-content">
                                <h3 className="post-title">
                                    {this.props.post.title}
                                </h3>
                                <p readOnly className="post-body">
                                    {this.props.post.content}
                                </p>
                            </div>

                            <div className="post-footer">
                                <div className="likes-count">
                                Likes: {this.props.post.likes_count}
                                </div>
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