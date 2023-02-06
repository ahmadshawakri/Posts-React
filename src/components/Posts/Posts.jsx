import React, { useEffect, useState, useContext } from "react";
import classes from "./Posts.module.css";
import Headers from "./Headers";
import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import { UserContext } from "../../Contexts/UserContext";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${loggedUser.id}/posts`
      );
      const posts = await res.json();
      setPosts(posts);
      setIsLoaded(true);
    };
    const loggedUser = JSON.parse(localStorage.user);
    setUserInfo(loggedUser);
    loadPosts();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Headers userPosts={posts} user={userInfo} />
        {isLoaded &&
          posts.map((post) => (
            <React.Fragment key={post.id}>
              <UserInfo name={userInfo.name} userName={userInfo.username} />
              <PostContent content={post} />
              <AddComment />
            </React.Fragment>
          ))}
      </div>
      <footer className={classes.footer}>
        <AddPost />
      </footer>
    </>
  );
}
