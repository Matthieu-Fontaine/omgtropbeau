import React, { useState } from 'react';


import dashboardSVG from '../assets/dashboard.svg';
import searchSVG from '../assets/search.svg';
import chatSVG from '../assets/chat.svg';
import ordersSVG from '../assets/orders.svg';
import settingsSVG from '../assets/settings.svg';
import logoutSVG from '../assets/logout.svg';


const NavBar: React.FC = () => {

  return (
    <div className="w-1/5 min-w-fit max-w-64 h-full bg-gray-400 rounded-lg">
      <ul className='space-y-1'>
        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={dashboardSVG} alt='Dashboard' />
          Dashboard
        </li>
        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={searchSVG} alt='Search' />
          Search
        </li>
        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={chatSVG} alt='Chat' />
          Chat
        </li>
        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={ordersSVG} alt='Orders' />
          Orders
        </li>
        <hr className="border-t border-gray-300 my-2 mx-auto w-2/3" />

        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={settingsSVG} alt='Settings' />
          Settings
        </li>
        <li className='flex text-2xl rounded-md pr-4 hover:bg-gray-500'>
          <img className='w-10 p-1' src={logoutSVG} alt='Logout' />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
