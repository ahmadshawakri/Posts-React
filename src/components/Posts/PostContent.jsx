import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PostContent.module.css";

const PostContent = (props) => {
  const navigate = useNavigate();

  const postClickHandler = () => {
    navigate(`/comments/${props.content.id}`);
  };

  return (
    <div className={classes.postBody} onClick={postClickHandler}>
      <p>{props.content.body}</p>
    </div>
  );
};

export default PostContent;
