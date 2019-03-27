import React from "react";

import "./CommentSection.css";

const Comment = props => {
  return (
    <p className="Comment">
      <span className="username">
        {props.comment.username || localStorage.getItem("username")}
      </span>{" "}
      {props.comment.text}
    </p>
  );
};

// Couldn't figure out how to make this work; used OR workaround above
// Comment.defaultProps = {
//   username: "doneill"
// };

export default Comment;
