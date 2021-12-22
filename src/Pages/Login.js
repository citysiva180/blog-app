import React from "react";
import { Container, Button } from "react-bootstrap";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <h1>Login</h1>
      <br></br>
      <br></br>
      <p>Sign In with Google</p>
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </Container>
  );
}

export default Login;
