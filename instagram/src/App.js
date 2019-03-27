import React, { Component } from "react";

// import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";
// import CommentSection from "./components/CommentSection/CommentSection";
import PostsPage from "./components/PostContainer/PostsPage";

import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
