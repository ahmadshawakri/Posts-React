import React from "react";
import classes from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={props.className}>
      <p>{props.message}</p>
    </div>
  );
};

export default Error;
