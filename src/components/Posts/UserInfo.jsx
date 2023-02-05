import React from "react";
import classes from "./UserInfo.module.css";

export default function UserInfo(props) {
  return (
    <div>
      <div>
        <img src="../../.././img/posts.png" />
      </div>
      <div>
        <h4>{props.name}</h4>
        <h4>@{props.userName}</h4>
      </div>
    </div>
  );
}
