import React from "react";
import styled, { css } from "styled-components";

import "./CommentSection.css";
import { Username } from "../../styles/reusables";

const CommentText = styled.p``;

const Comment = props => {
  return (
    <CommentText className="Comment">
      <Username display="inline" fontWeight="600">
        {props.comment.username || localStorage.getItem("username")}
      </Username>{" "}
      {props.comment.text}
    </CommentText>
  );
};

// Couldn't figure out how to make this work; used OR workaround above
// Comment.defaultProps = {
//   username: "doneill"
// };

export default Comment;
