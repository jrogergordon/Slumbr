import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            avatar_image: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.processDemoLogin({
            username: "demo_user",
            password: "password"
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.avatar_image = 'P';
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className='signup-title'>
                        Welcome to Tumbler!
                    </div>
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <button onClick={this.props.closeModal} className='button' id="close-signup-button">x</button>
                        <br />
                        <div className='signup-credentials'>
                            <div>
                        <label>Username:
                            <input type="text"
                                placeholder='Username'
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input-username"
                            />
                        </label>
                        <br />
                        <label>Email:
                            <input type="text"
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input-username"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input-password"
                            />
                        </label>
                        </div>
                        </div>
                        <br />
                        <div className='signup-buttons'>
                        <input className="button" id="signup-button" type="submit" value="Signup" />
                        <button className='button' id="demo-signup" onClick={this.handleDemo}>Demo Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
//