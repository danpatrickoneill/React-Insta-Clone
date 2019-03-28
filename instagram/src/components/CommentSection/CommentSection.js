import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import "./CommentSection.css";

import Comment from "./Comment";

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  text-align: left;
`;

const CommentForm = styled.form``;

const CommentInput = styled.input`
  width: 600px;
  border: none;
  border-top: lightgray 1px solid;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      comments: props.comments,
      commentText: ""
    };
  }

  componentDidUpdate() {}

  handleChanges = event => {
    this.setState({
      commentText: event.target.value
    });
    console.log(this.state);
  };

  addNewComment = (event, id = this.state.id) => {
    event.preventDefault();
    if (!this.state.commentText) {
      alert("Please enter a comment");
    } else {
      console.log("New comment, eh?", this.state.commentText);
      this.props.appendComment(this.state.commentText, id);
    }
    this.clearComment(event);
  };

  clearComment = event => {
    event.preventDefault();
    event.target.reset();
    this.setState({
      commentText: ""
    });
  };

  render() {
    console.log(this.state.comments);
    return (
      <CommentDiv>
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <CommentForm onSubmit={this.addNewComment}>
          <CommentInput
            onChange={this.handleChanges}
            type="text"
            placeholder="Add a comment..."
          />
        </CommentForm>
      </CommentDiv>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
