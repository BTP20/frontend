import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./containers/Dashboard/Dashboard";
import GettingStarted from "./containers/GettingStarted/GettingStarted";

const App = () => {
  const user = useSelector((state) => state);
  console.log(user);

  return (
    <>
      {user.token ? <Dashboard /> : <GettingStarted />}
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
