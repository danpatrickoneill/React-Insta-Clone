import React from "react";

import "./CommentSection.css";

const Comment = props => {
  return (
    <p className="Comment">
      <span className="username">{props.comment.username}</span>{" "}
      {props.comment.text}
    </p>
  );
};

Comment.defaultProps = {
  username: "doneill"
};

export default Comment;
