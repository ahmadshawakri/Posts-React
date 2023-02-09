import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headers from "../UI/Headers";
import UserInfo from "../UI/UserInfo";
import Card from "../UI/Card";
import CommentContnet from "./CommentContent";
import classes from "./Comments.module.css";
import AddComment from "../Posts/AddComment";

const Comments = (props) => {
  const { id } = useParams();
  // console.log(id);

  const [state, setState] = useState({
    postBody: "",
    postComments: [],
    loggedUser: [],
    isLoaded: false,
  });

  useEffect(() => {
    const loadComments = async () => {
      const user = JSON.parse(localStorage.user);
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const mainPost = await postRes.json();
      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const comments = await commentsRes.json();
      if (comments.length !== 0) {
        setState({
          postBody: `${mainPost.body}`,
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
        <p>{state.postBody}</p>
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
