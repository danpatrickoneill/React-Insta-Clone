import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props.data);
  return props.data.map(datum => (
    <div key={datum.id} className="PostContainer">
      <header className="PostHeader">
        <img className="avatar" src={datum.thumbnailUrl} alt="user avatar" />
        <p className="username">{datum.username}</p>
      </header>
      <img className="user-image" src={datum.imageUrl} alt="" />
      <div className="iContainer">
        <i className="far fa-heart" onClick={() => props.addLike(datum.id)} />
        <i className="far fa-comment" />
      </div>
      <p style={{ fontWeight: "bold" }}>{datum.likes} likes</p>
      <CommentSection
        id={datum.id}
        comments={datum.comments}
        appendComment={props.appendComment}
      />
      <p className="timestamp" style={{ fontSize: "8px" }}>
        {datum.timestamp}
      </p>
    </div>
  ));
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default PostContainer;
