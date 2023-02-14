import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Upload from "../../components/Upload/Upload";

const Dashboard = () => {
  return (
    <>
      <Navigate to="/" replace={true} />
      <Routes>
        <Route path="/" element={<Upload />} />
      </Routes>
    </>
  );
};

export default Dashboard;
