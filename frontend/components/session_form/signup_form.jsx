import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
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
        let backgroundImage = <img className="background-image" src="https://cdn.mos.cms.futurecdn.net/koJs46qPG4rPsL6KohQac3.jpg" />;
        return (
            <div className="signup-form-container">
                {backgroundImage}
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    Welcome to Tumbler!
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
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
                        <br />
                        <input className="session-submit" type="submit" value="signup" />
                        <button id="demo-signup" onClick={this.handleDemo}>Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;