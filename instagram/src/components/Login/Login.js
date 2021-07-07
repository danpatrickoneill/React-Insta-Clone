import React from "react";
import styled, { css } from "styled-components";

import "./Login.css";

const LoginContainer = styled.div`
  margin: 100px auto;
  width: 300px;
  border: #405de6 solid 5px;
  border-radius: 10px;
`;

const LoginLogo = styled.img`
  width: 250px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const LoginInput = styled.input`
  margin-bottom: 20px;
  width: 200px;
  border-radius: 10px;
  background: ${props => props.inputColor};
  border: ${props => props.inputColor} 5px solid;
  color: white;

  &::placeholder {
    color: white;
  }
`;

const LoginButton = styled.button`
  background: #405de6;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

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
    if (!this.state.username) {
      event.preventDefault();
      alert("Please enter valid username");
    } else if (!this.state.password) {
      event.preventDefault();
      alert("Please enter valid password");
    } else {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
    }
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
      <LoginContainer>
        <LoginForm onSubmit={this.login}>
          <LoginLogo
            src="https://fontmeme.com/images/instagram-new-logo.png"
            alt="IG logo"
          />
          <LoginInput
            inputColor="#e1306c"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
          />
          <LoginInput
            inputColor="#fcaf45"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
          />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default Login;
