import React from 'react';

class CreateLinkPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state);
        this.props.postAction(post);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        if (!this.props.currentUser) {
            return "";
        } else {
            let errors = this.props.errors.map(error => <li key={error}>{error}</li>)

            return (
                <div className="create-text-post-modal">
                    <div id="creation-username">
                        {this.props.currentUser.username}
                    </div>
                    <div id="post-creation">
                        <input type="text"
                            placeholder='Your Link'
                            value={this.state.content}
                            onChange={this.update('content')}
                            className="create-link-post-title"
                        />
                        <textarea type="text"
                            wrap="hard"
                            placeholder='Description (optional)'
                            value={this.state.title}
                            onChange={this.update('title')}
                            className="create-link-post-content"
                        />
                    </div>
                    <div className='submission-buttons'>
                        <button className='submit-post'
                            onClick={this.handleSubmit}>
                            Submit
                        </button>

                        <button className='delete-post-creation'
                            onClick={this.props.closeModal}>
                            Discard
                        </button>
                    </div>
                </div>
            );
        }
    }
}

export default CreateLinkPostForm;