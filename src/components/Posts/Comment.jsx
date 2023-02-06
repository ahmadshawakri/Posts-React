import React from "react";
import classes from "./Comment.module.css";

const Comment = (props) => {
  const user = JSON.parse(localStorage.user);
  return (
    <>
      {props.body.map((comment) => (
        <div key={comment} className={classes.commentCont}>
          <div>
            <img src="../../.././img/comments.png" />
          </div>
          <div className={classes.commenter}>
            <h4>{user.name}</h4>
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
