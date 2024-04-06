import React, { useEffect } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div className='w-full h-screen bg-admin-gray'>
      <Header name='Dashboard' />
      <SideBar />
      Dashboard
    </div>
  );
};

export default Dashboard;