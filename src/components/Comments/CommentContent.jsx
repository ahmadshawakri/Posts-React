import React from "react";
import classes from "./CommentContent.module.css";

const CommentContnet = ({ commentData }) => {
  return (
    <React.Fragment>
      <div className={classes.userCont}>
        <div>
          <img src="../../../img/comments.png" />
        </div>
        <div className={classes.userName}>
          <h4>{commentData.name}</h4>
        </div>
      </div>
      <div className={classes.commentsBody}>
        <p>{commentData.body}</p>
      </div>
    </React.Fragment>
  );
};

export default CommentContnet;
