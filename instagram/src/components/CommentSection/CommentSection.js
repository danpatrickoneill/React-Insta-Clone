import React from "react";

import "./CommentSection.css";

const CommentSection = props => {
  console.log(props);
  return (
    <div className="Comment">
      {props.comments.map(comment => (
        <p key={comment.id}>
          {comment.username} {comment.text}
        </p>
      ))}
      <input
        className="CommentBar"
        type="text"
        placeholder="Add a comment..."
      />
    </div>
  );
};

export default CommentSection;
