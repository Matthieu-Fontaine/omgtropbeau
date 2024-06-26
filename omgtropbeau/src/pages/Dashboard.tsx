import React, { useEffect } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div className='w-full h-screen bg-admin-gray flex flex-col'>
      <Header name='Dashboard' />
      <SideBar />
      <div className='flex-1 p-4'>

      </div>
    </div>
  );
};

export default Dashboard;