import "./App.css";
import Login from "./components/Login/LoginPage";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/comments/:id" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
