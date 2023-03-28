import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const GettingStarted = () => {
  return (
    <>
      hi
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default GettingStarted;
