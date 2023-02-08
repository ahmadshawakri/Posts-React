import React, { useEffect, useState} from "react";
import classes from "./Posts.module.css";
import Headers from "../UI/Headers";
import UserInfo from "../UI/UserInfo";
import PostContent from "./PostContent";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import Card from "../UI/Card";

export default function Posts(props) {
  const [state, setState] = useState({
    userPosts: [],
    userInfo: [],
    isLoaded: false,
  });

  useEffect(() => {
    const loadPosts = async () => {
      const loggedUser = JSON.parse(localStorage.user);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${loggedUser.id}/posts`
      );
      const posts = await res.json();
      setState({
        userPosts: posts,
        userInfo: loggedUser,
        isLoaded: true,
      });
    };
    loadPosts();
  }, []);

  return (
    <>
      <Card>
        <Headers head="Discover" />
        {state.isLoaded &&
          state.userPosts.map((post) => (
            <React.Fragment key={post.id}>
              <UserInfo name={state.userInfo.name} userName={state.userInfo.username} />
              <PostContent content={post} />
              <AddComment />
            </React.Fragment>
          ))}
      </Card>
      <footer className={classes.footer}>
        <AddPost />
      </footer>
    </>
  );
}
