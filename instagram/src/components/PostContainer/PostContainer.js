import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { Icon, Username } from "../../styles/reusables";

const PostContainerDiv = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
`;

const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const UserThumbnail = styled.img`
  max-height: 50px;
  border-radius: 50%;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const UserImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Likes = styled.p`
  padding-left: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Timestamp = styled.p`
  padding-left: 20px;
  font-size: 10px;
  margin-bottom: 8px;
`;

const PostContainer = props => {
  console.log(props.data);
  return props.data.map(datum => (
    <PostContainerDiv key={datum.id}>
      <PostHeader>
        <UserThumbnail src={datum.thumbnailUrl} alt="user avatar" />
        <Username>{datum.username}</Username>
      </PostHeader>
      <UserImage src={datum.imageUrl} alt="" />
      <IconContainer>
        <Icon
          className="far fa-heart"
          fontSize="24px"
          hoverColor="crimson"
          onClick={() => props.addLike(datum.id)}
        />
        <Icon className="far fa-comment" fontSize="24px" />
      </IconContainer>
      <Likes>{datum.likes} likes</Likes>
      <Timestamp>{datum.timestamp}</Timestamp>
      <CommentSection
        id={datum.id}
        comments={datum.comments}
        appendComment={props.appendComment}
      />
    </PostContainerDiv>
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
