import "./App.css";
import { useState } from "react";
import Login from "./components/Login/LoginPage";
import Posts from "./components/Posts/Posts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  // if (localStorage.user === null) {
  //   contextValue = { userInfo, setUserInfo };
  // } else {
  //   setIsLoggedIn(true);
  //   contextValue = JSON.parse(localStorage.user);
  // }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>} />
          <Route path="/posts/:id" element={<Posts></Posts>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
