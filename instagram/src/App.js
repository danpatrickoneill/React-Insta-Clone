import React, { Component } from "react";

// import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";
// import CommentSection from "./components/CommentSection/CommentSection";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import Login from "./components/Login/Login";

import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
console.log(withAuthenticate(PostsPage));

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
