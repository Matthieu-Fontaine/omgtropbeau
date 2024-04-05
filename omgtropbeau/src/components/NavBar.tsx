import React from 'react';

import dashboardSVG from '../assets/dashboard.svg';
import searchSVG from '../assets/search.svg';
import chatSVG from '../assets/chat.svg';
import ordersSVG from '../assets/orders.svg';
import settingsSVG from '../assets/settings.svg';
import logoutSVG from '../assets/logout.svg';


const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={dashboardSVG} alt='Dashboard' />
          Dashboard
          </li>
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={searchSVG} alt='Search' />
          Search
          </li>
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={chatSVG} alt='Chat' />
          Chat
        </li>
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={ordersSVG} alt='Orders' />
          Orders
        </li>
        <hr />
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={settingsSVG} alt='Settings' />
          Settings
        </li>
        <li className='flex text-2xl'>
          <img className='w-10 p-1' src={logoutSVG} alt='Logout' />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
