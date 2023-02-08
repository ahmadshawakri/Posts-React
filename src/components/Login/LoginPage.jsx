import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";
import Error from "../ErrorMsg/Error";

const Login = (props) => {
  const emailRef = useRef(null);
  const navigateTo = useNavigate();

  const [error, setError] = useState(null);

  const checkEmail = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${email}`
      );
      const user = await res.json();

      if (user.length === 0) {
        throw "Incorrect Email Address";
      } else {
        setError(null);
        localStorage.user = JSON.stringify(user[0]);
        navigateTo(`/posts/${user[0].id}`);
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (emailRef.current.value.includes("@")) {
      checkEmail(event);
    }
  }, [checkEmail, emailRef]);

  return (
    <>
      <div className={classes.loginCont}>
        <h2>Log in</h2>
        <form onSubmit={checkEmail}>
          <input ref={emailRef} type="email" placeholder="jane@example.com" />
          <input type="password" placeholder="**********" />
          <button type="submit">LOG IN</button>
        </form>
        {error && <Error className={classes.error} message={error} />}
      </div>
    </>
  );
};

export default Login;
