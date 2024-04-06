import React, { useEffect } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Orders';
  }, []);

  return (
    <div className='w-full h-screen bg-admin-gray'>
      <Header name='Dashboard' />
      <SideBar />
      Orders
    </div>
  );
};

export default Dashboard;