import React from "react";

const withAuthenticate = Content => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <Content />;
      }
      return <Login />;
    }
  };

export default withAuthenticate;
