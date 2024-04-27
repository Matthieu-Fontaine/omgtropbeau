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
      <div className="m-3 p-2 rounded-lg bg-white">
        <form className="flex flex-col">
          <label className="text-lg font-bold">Email</label>
          <input type="text" className="border-2 border-gray-300 p-2 rounded-lg" />
          <label className="text-lg font-bold">Username</label>
          <input type="text" className="border-2 border-gray-300 p-2 rounded-lg" />
          <label className="text-lg font-bold">Password</label>
          <input type="text" className="border-2 border-gray-300 p-2 rounded-lg" />
          <label className="text-lg font-bold">Confirm Password</label>
          <input type="text" className="border-2 border-gray-300 p-2 rounded-lg" />
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-2">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;