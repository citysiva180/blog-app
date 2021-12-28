// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/Layout/auth/LoginForm";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
