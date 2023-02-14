import React, { useEffect, useState } from "react";
import Dashboard from "./containers/Dashboard/Dashboard";
import GettingStarted from "./containers/GettingStarted/GettingStarted";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Dashboard />
      ) : (
        <GettingStarted isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
