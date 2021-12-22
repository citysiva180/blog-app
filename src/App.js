// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/createpost" element={Home}></Route>
        <Route path="/login" element={Home}></Route>
      </Routes>
    </Router>
  );
}

export default App;
