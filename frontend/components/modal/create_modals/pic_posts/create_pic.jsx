import React from 'react';

class CreatePicPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.post,
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[content]', this.state.content);
        formData.append('post[photo]', this.state.photoFile);
        formData.append('post[id]', this.state.post.id);
        formData.append('post[post_type]', "photo");
        formData.append('post[author_id]', this.props.currentUser)
        this.props.postAction(formData, this.state.post).then(this.props.closeModal());
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

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
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
                    <input type="file"
                        className='photo-preview-'
                        onChange={this.handleFile}/>                        
                    <textarea type="text"
                        wrap="hard"
                        placeholder='Title (optional)'
                        value={this.state.title}
                        onChange={this.update('title')}
                        className="create-photo-post-title"
                        />
                    <div id="post-creation">
                        <input type="text"
                            placeholder='Add some commentary (optional)'
                            value={this.state.content}
                            onChange={this.update('content')}
                            className="create-photo-post-content"
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

export default CreatePicPostForm;