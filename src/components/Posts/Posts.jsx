import React, { useEffect, useState, useContext } from "react";
import classes from "./Posts.module.css";
import Headers from "./Headers";
import { UserContext } from "../../Contexts/UserContext";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);
  const loggedUser = JSON.parse(localStorage.user);
  console.log(loggedUser);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${loggedUser.id}/posts`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={classes.container}>
      <Headers userPosts={posts} />
    </div>
  );
}
