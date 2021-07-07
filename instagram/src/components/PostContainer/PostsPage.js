import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

import dummyData from "../../dummy-data";
import "./PostsPage.css";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      commentID: 14
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  searchPosts = text => {
    if (text) {
      this.setState({
        data: this.state.data.filter(post => post.username.includes(text))
      });
    } else {
      this.setState({
        data: dummyData
      });
    }
  };

  appendComment = (text, id) => {
    const newComment = {
      id: this.state.commentID.toString(),
      text: text
    };
    let newID = this.state.commentID + 1;
    this.setState({
      commentID: newID
    });
    this.setState({
      data: this.state.data.map(post => {
        if (post.id === id) {
          post.comments.push(newComment);
        }
        return post;
      })
    });
  };

  addLike = id => {
    this.setState({
      data: this.state.data.map(post => {
        if (post.id === id) {
          post.likes += 1;
        }
        return post;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.data} searchPosts={this.searchPosts} />
        <PostContainer
          data={this.state.data}
          appendComment={this.appendComment}
          addLike={this.addLike}
        />
      </div>
    );
  }
}

export default PostsPage;
