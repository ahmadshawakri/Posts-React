import React from "react";
import classes from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={classes.userCont}>
      <div>
        <img src="../img/posts.png" />
      </div>
      <div className={classes.userNames}>
        <h4>{props.name}</h4>
        <h5>@{props.userName}</h5>
      </div>
    </div>
  );
};

export default UserInfo;
