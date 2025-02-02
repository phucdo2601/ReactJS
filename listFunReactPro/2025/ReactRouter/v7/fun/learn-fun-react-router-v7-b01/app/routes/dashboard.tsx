import React from "react";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold underline text-red-500">
          Hey, Welcome to the dashboard!
        </h1>
        <Outlet />
      </div>
      ;
    </>
  );
};

export default Dashboard;
