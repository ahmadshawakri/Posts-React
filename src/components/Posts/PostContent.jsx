import React from "react";
import classes from "./PostContent.module.css";

const PostContent = (props) => {

  

  return (
    <div className={classes.postBody}>
      <p>{props.content.body}</p>
    </div>
  );
};

export default PostContent;
