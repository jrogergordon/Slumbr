import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        this.props.processLogin(user);
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
        let errors = this.props.errors.map(error => <li key={error}>{error}</li>)
        let backgroundImage = <img className="background-image" src="https://www.superprof.com/blog/wp-content/uploads/2018/02/landscape-photography-tutorials-1060x596.jpg" />;
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <h3 className='login-title'>Welcome to Slumbr</h3>
                        <button onClick={this.props.closeModal} className='button' id="close-login-button">x</button>
                        <br />
                        <ul className="errors-div">
                            {errors}
                        </ul>
                        <br />
                        <div className='login-credentials'>
                            <label className='signup-cred-item'> Username
                                <input type="text"
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input-username"
                                />
                            </label>
                            <br />
                            <label className='signup-cred-item'>Password
                                <input type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input-password"
                                />
                            </label>
                        </div>
                        <br />
                        <div className='login-buttons'>
                            <input className="button" id='login-button' type="submit" value="Login" />
                            <button className="button" id="demo-login" onClick={this.handleDemo}>Demo Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
