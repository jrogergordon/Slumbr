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
        this.updateAvatar = this.updateAvatar.bind(this);
        this.isHighlighted = this.isHighlighted.bind(this);
        this.whichImage = this.whichImage.bind(this);
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

    updateAvatar(x) {
        this.setState({
            avatar_image: x
        });
    }

    isHighlighted(x) {
        if (this.state.avatar_image === '') {
            this.state.avatar_image = x;
        }
        if(x === this.state.avatar_image) {
            return (
                <img className="sub-avt-highlighted" id="post-avatar" src={this.whichImage(x)} onClick={() => this.updateAvatar(x)} />
            )
        } else {
            return (
                <img id="post-avatar" src={this.whichImage(x)} onClick={() => this.updateAvatar(x)} />
            )
        }
    }

    whichImage(y) {
        let avtUrl;
        switch(y) {
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
                break;
        }
        return avtUrl;
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.state.avatar_image = 'P'; does not work
        const user = Object.assign({}, this.state);
        // user.avatar_image = 'R'; does not work
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
                        {/* <label>Image:
                            <input type="text"
                                placeholder='avatar_image'
                                value={this.state.avatar_image}
                                onChange={this.update('avatar_image')}
                                className="signup-input-password"
                            />
                        </label>     */}
                        <div className='image-select'>
                            <div id="image-select-sentence">
                                Select your Avatar:
                            </div>
                            <div className='image-graph'>                        
                                {this.isHighlighted("G")}
                                {this.isHighlighted("D")}
                                {this.isHighlighted("C")}
                                {this.isHighlighted("O")}
                                {this.isHighlighted("P")}
                                {this.isHighlighted("R")}
                                {this.isHighlighted("B")}
                                {this.isHighlighted("S")}
                                {this.isHighlighted("T")}
                            </div>
                        </div>

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