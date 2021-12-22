// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Router>
      <Layout>Hello :-)</Layout>
    </Router>
  );
}

export default App;
