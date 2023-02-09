import React, { useRef } from "react";
import classes from "./ModalContant.module.css";

const ModalContant = (props) => {
  const newPostRef = useRef("");
  const submitPostHandler = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      body: newPostRef.current.value,
    };
    props.onAddPost(newPost);
    event.target.reset();
    props.onCloseModal();
  };

  return (
    <>
      <h2 className={classes.modalHead}>Write Your New Post</h2>
      <form className={classes.modalForm} onSubmit={submitPostHandler}>
        <textarea placeholder="What's on your mind!" ref={newPostRef} />
        <div className={classes.modalButtons}>
          <button type="button" onClick={props.onCloseModal}>
            close
          </button>
          <button type="submit">Add Post</button>
        </div>
      </form>
    </>
  );
};

export default ModalContant;
