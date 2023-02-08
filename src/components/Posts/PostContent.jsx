import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PostContent.module.css";

const PostContent = (props) => {
  const navigate = useNavigate();

  const postClickHandler = () => {
    const clickedPost = {
      id: props.content.id,
      body: props.content.body,
    };
    navigate(`/posts/${props.content.id}/comments`, { state: clickedPost });
  };

  return (
    <div className={classes.postBody} onClick={postClickHandler}>
      <p>{props.content.body}</p>
    </div>
  );
};

export default PostContent;
