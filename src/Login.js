import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate('/');
    })
    .catch((error) => {
      alert("User does not exist")
    });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Swal.fire('User has been created!<br>Please hit Sign In to continue')
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>

          <p>
            By signing in you agree the Terms and Conditions of the Amazon fake
            clone. Please see our privacy notice and out cookies policy
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;