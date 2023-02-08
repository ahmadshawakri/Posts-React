import React from "react";
import classes from "./ModalContant.module.css";

const ModalContant = (props) => {
  return (
    <>
      <h2 className={classes.modalHead}>Write Your New Post</h2>
      <form className={classes.modalForm}>
        <textarea placeholder="What's on your mind!" />
        <div className={classes.modalButtons}>
          <button onClick={props.onCloseModal}>close</button>
          <button>the modal</button>
        </div>
      </form>
    </>
  );
};

export default ModalContant;
