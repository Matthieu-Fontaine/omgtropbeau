import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import dashboardSVG from '../assets/dashboard.svg';
import searchSVG from '../assets/search.svg';
import chatSVG from '../assets/chat.svg';
import ordersSVG from '../assets/orders.svg';
import settingsSVG from '../assets/settings.svg';
import logoutSVG from '../assets/logout.svg';

const SideBar: React.FC = () => {

  const [showSideBar, setShowSideBar] = useState(true);

  const showSideBarFn = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <nav className='lg:hidden m-2 bg-white rounded-lg w-12 p-2 border-2 border-gray-700'  onClick={showSideBarFn}>
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </nav>

      <nav className='w-60 lg:flex bg-white rounded-lg ml-2' hidden={showSideBar}>
        <ul className='space-y-2 p-2'>
          <li className='rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <Link to='/' className='flex items-center'>
              <img className='w-10 p-1 mr-2' src={dashboardSVG} alt='Dashboard' />
              <h3 className='text-xl font-semibold'>
                Dashboard
              </h3>
            </Link>
          </li>
          <li className='flex text-2xl rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <img className='w-10 p-1 mr-2' src={searchSVG} alt='Search' />
            <h3 className='text-xl font-semibold'>Search</h3>
          </li>
          <li className='flex text-2xl rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <img className='w-10 p-1 mr-2' src={chatSVG} alt='Chat' />
            <h3 className='text-xl font-semibold'>Chat</h3>
          </li>
          <li className='rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <Link to='/orders' className='flex items-center'>
              <img className='w-10 p-1 mr-2' src={ordersSVG} alt='Orders' />
              <h3 className='text-xl font-semibold'>Orders</h3>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='lg:flex w-60 h-32 bg-white rounded-lg m-2' hidden={showSideBar}>
        <ul className='space-y-2 p-2'>
          <li className='flex text-2xl rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <img className='w-10 p-1 mr-2' src={settingsSVG} alt='Settings' />
            <h3 className='text-xl font-semibold'>Settings</h3>
          </li>
          <li className='flex text-2xl rounded-md pr-4 my-2 mx-5 items-center hover:bg-admin-light-blue hover:text-admin-blue'>
            <img className='w-10 p-1 mr-2' src={logoutSVG} alt='Logout' />
            <h3 className='text-xl font-semibold'>Logout</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;