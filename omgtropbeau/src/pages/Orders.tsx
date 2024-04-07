import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DataTable from "../components/DataTable";

import getFakeOrders from "../data/fakeOrders";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    getFakeOrders().then((data) => {
      setOrders(data);
    });
  }, []);

  useEffect(() => {
    document.title = 'Orders';
  }, []);


  return (
    <div className='w-full h-screen bg-admin-gray'>
      <Header name='Orders' />
      <div className='flex'>
        <SideBar />
        <DataTable data={orders} />
      </div>
    </div>
  );
};

export default Orders;