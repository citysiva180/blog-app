// import logo from './logo.svg';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
import NavBar from "./utils/NavBar/NavBar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <NavBar loggedIn={isAuth}></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
