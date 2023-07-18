import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NNd2RAeVGQHZ63jWUhYrKdayd9qmEdA90BkD9pVs3Nnvl7J5fPm4HhEM1b7LrNhbzDwKEvMQF6QrMrzbSSpRrr4006P3vqWGE"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<><Header/><Home/></>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
