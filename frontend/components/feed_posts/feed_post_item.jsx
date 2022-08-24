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
                    Delete
                </button>
            );
        }
    }

    render() {
        return (
            <div className="feed-post-item">
                <li className="feed-item">
                    <div className="post-text">
                        <div className="post-header">
                            Beep
                            {/* {this.props.users[this.props.post.author_id].username} */}
                        </div>
                        <div className="post-content">
                            <div className="post-title">
                                {this.props.post.title}
                            </div>
                            <div className="post-body">
                                {this.props.post.content}
                            </div>
                        </div>

                        <div className="post-footer">
                            <div className="delete-my-post">
                                {this.renderDeleteButtons()}
                            </div>
                            <div>
                                Likes: {this.props.post.likes_count}
                            </div>
                        </div>

                    </div>
                </li>
            </div>
        );
    }
}

export default FeedPostsItem;