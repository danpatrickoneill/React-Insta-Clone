import React from "react";

import "./CommentSection.css";

const Comment = props => {
  return (
    <p>
      <span className="username">{props.comment.username}</span>{" "}
      {props.comment.text}
    </p>
  );
};

export default Comment;
