import React from 'react';


class DeleteConfirm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='delete-regi-modal'>
                <div className='delete-regi-container'>
                    <div className='are-you-sure'>
                        <div>
                            <div id="are-you-sure"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Are You Sure</div>
                            <div id="you-want-to">You Want to Delete this Post?</div>
                        </div>
                    </div>
                    <div className='delete-regi-title'>
                        {this.props.post.title}
                    </div>
                    <div className='title-underline'>

                    </div>
                    <div className='regi-delete-footer'>
                        <div>
                            <button id="cancel-button" className='button'
                                onClick={this.props.closeModal}>
                                Cancel
                            </button>
                        </div>
                        <div>
                            <div>
                                <button id="delete-post-button"
                                    className='button'
                                    onClick={() => this.props.deletePost(this.props.post.id)} >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteConfirm;