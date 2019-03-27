import React from "react";

import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  login = event => {
    console.log("Login attempt start");
    localStorage.setItem("username", this.state.username);
    this.setState({
      username: this.state.username
    });
  };

  handleChanges = event => {
    console.log("event: ", event.target.value);
    let value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  render() {
    return (
      <div className="loginContainer">
        <form className="login" onSubmit={this.login}>
          <input
            className="usernameInput"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
          />
          <input
            className="passwordInput"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
          />
          <button className="loginButton">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
