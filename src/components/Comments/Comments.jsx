import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Headers from "../UI/Headers";
import UserInfo from "../UI/UserInfo";
import Card from "../UI/Card";
import CommentContnet from "./CommentContent";
import classes from "./Comments.module.css";
import AddComment from "../Posts/AddComment";

const Comments = (props) => {
  const location = useLocation();
  const clickedPost = location.state;
  console.log(clickedPost.id);

  const [state, setState] = useState({
    postComments: [],
    loggedUser: [],
    isLoaded: false,
  });

  useEffect(() => {
    const loadComments = async () => {
      const user = JSON.parse(localStorage.user);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${clickedPost.id}/comments`
      );
      const comments = await res.json();
      if (comments.length !== 0) {
        setState({
          postComments: comments,
          loggedUser: user,
          isLoaded: true,
        });
      }
    };
    loadComments();
  }, []);

  return (
    <Card>
      <div>
        <Headers head="Comments" />
      </div>
      <div>
        <UserInfo
          name={state.loggedUser.name}
          userName={state.loggedUser.username}
        />
      </div>
      <div className={classes.mainPost}>
        <p>{clickedPost.body}</p>
      </div>
      <div>
        <AddComment />
      </div>

      {state.isLoaded &&
        state.postComments.map((comment) => (
          <React.Fragment key={comment.id}>
            <CommentContnet commentData={comment} />
          </React.Fragment>
        ))}
    </Card>
  );
};

export default Comments;
