import React from "react";

import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props.data);
  return props.data.map(datum => (
    <div key={datum.id} className="PostContainer">
      <header className="PostHeader">
        <img src={datum.thumbnailUrl} alt="user avatar" />
        <p>{datum.username}</p>
      </header>
      <img src={datum.imageUrl} alt="" />
      <input type="image" src="" />
      <input type="image" src="" />
      <p>{datum.likes} likes</p>
      <CommentSection comments={datum.comments} />
      <p>{datum.timestamp}</p>
    </div>
  ));
};

export default PostContainer;
