import React from "react";

const Dashboard = ({ childred }) => {
  return (
    <div className="dashboard">
      <div className="side-bar"></div>

      <div className="main-content">
        {childred}
        <h1>Hi</h1>
      </div>
    </div>
  );
};

export default Dashboard;