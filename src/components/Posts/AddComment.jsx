import React from "react";
import classes from "./AddComment.module.css";

const AddComment = (props) => {
  return (
    <>
      <hr style={{width: "95%"}} />
      <div className={classes.addComment}>
        <img src="../../.././img/Vector.png" />
        <input type="text" placeholder="Add Comment..." />
      </div>
      <hr style={{width: "100%"}}/>
    </>
  );
};

export default AddComment;
