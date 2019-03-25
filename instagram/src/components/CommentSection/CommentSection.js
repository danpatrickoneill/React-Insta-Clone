import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

import Comment from "./Comment";

const CommentSection = props => {
  console.log(props);
  return (
    <div className="Comment">
      {props.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <input
        className="CommentBar"
        type="text"
        placeholder="Add a comment..."
      />
    </div>
  );
};

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
