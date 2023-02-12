import React, { useEffect, useState, useRef } from "react";
import classes from "./Posts.module.css";
import Headers from "../UI/Headers";
import UserInfo from "../UI/UserInfo";
import PostContent from "./PostContent";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import Card from "../UI/Card";

export default function Posts(props) {
  const [searchedInput, setSearchedInput] = useState("");
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

  const searchPostHandler = (event) => {
    setSearchedInput(event.target.value);
  };

  const filteredPosts = state.loadedPosts.filter((post) =>
    post.body.toLowerCase().includes(searchedInput.toLocaleLowerCase())
  );

  return (
    <div className={classes.mainDiv}>
      <Card>
        <Headers head="Discover" />
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <img src="../../../img/icons8-search-48.png" />
          </div>
          <div className={classes.searchInput}>
            <input
              type="text"
              placeholder="Search for posts..."
              value={searchedInput}
              onChange={searchPostHandler}
            />
          </div>
        </div>
        {state.isLoaded &&
          filteredPosts.map((post) => (
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
    </div>
  );
}
