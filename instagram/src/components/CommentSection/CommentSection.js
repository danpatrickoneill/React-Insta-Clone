import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

import Comment from "./Comment";

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
      <div className="CommentSection">
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <form onSubmit={this.addNewComment}>
          <input
            onChange={this.handleChanges}
            className="CommentBar"
            type="text"
            placeholder="Add a comment..."
          />
        </form>
      </div>
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
