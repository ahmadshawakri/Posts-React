import React, { useEffect, useState } from "react";
import classes from "./Posts.module.css";
import Headers from "../UI/Headers";
import UserInfo from "../UI/UserInfo";
import PostContent from "./PostContent";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import Card from "../UI/Card";

export default function Posts(props) {
  const [state, setState] = useState({
    allPosts: [],
    loadedPosts: [],
    userInfo: [],
    isLoaded: false,
    startIndex: 0,
  });

  useEffect(() => {
    const loadPosts = async () => {
      const loggedUser = JSON.parse(localStorage.user);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${loggedUser.id}/posts`
      );
      const posts = await res.json();
      setState({
        allPosts: posts,
        loadedPosts: posts.slice(0, 5),
        userInfo: loggedUser,
        isLoaded: true,
        startIndex: 5,
      });
    };
    loadPosts();
  }, []);

  const addPostHandler = async (addedNewPost) => {
    await setState((prevState) => ({
      ...state,
      allPosts: [addedNewPost, ...prevState.allPosts],
      loadedPosts: [addedNewPost, ...prevState.loadedPosts],
    }));
  };

  const loadMorePosts = () => {
    setState((prevState) => ({
      ...state,
      loadedPosts: [
        ...prevState.loadedPosts,
        ...prevState.allPosts.slice(
          prevState.startIndex,
          prevState.startIndex + 5
        ),
      ],
      startIndex: prevState.startIndex + 5,
    }));
    return;
  };

  return (
    <>
      <Card>
        <Headers head="Discover" />
        {state.isLoaded &&
          state.loadedPosts.map((post) => (
            <React.Fragment key={post.id}>
              <UserInfo
                name={state.userInfo.name}
                userName={state.userInfo.username}
              />
              <PostContent content={post} />
              <AddComment />
            </React.Fragment>
          ))}
        <div className={classes.loadButton}>
          <button type="button" onClick={loadMorePosts}>
            More Posts
          </button>
        </div>
      </Card>

      <footer className={classes.footer}>
        <AddPost onAddPost={addPostHandler} />
      </footer>
    </>
  );
}
