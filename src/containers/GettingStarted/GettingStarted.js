import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const GettingStarted = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<SignUp isLogin={isLogin} setIsLogin={setIsLogin} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp isLogin={isLogin} setIsLogin={setIsLogin} />}
        ></Route>
        <Route
          path="/signin"
          element={<SignIn isLogin={isLogin} setIsLogin={setIsLogin} />}
        ></Route>
      </Routes>
    </>
  );
};

export default GettingStarted;
