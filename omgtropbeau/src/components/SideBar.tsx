import { Link } from 'react-router-dom';

import dashboardSVG from '../assets/dashboard.svg';
import searchSVG from '../assets/search.svg';
import chatSVG from '../assets/chat.svg';
import ordersSVG from '../assets/orders.svg';
import settingsSVG from '../assets/settings.svg';
import logoutSVG from '../assets/logout.svg';

const SideBar: React.FC = () => {
  return (
    <div>
      <nav className='w-60 h-96 bg-white rounded-lg m-2'>
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

      <nav className='w-60 h-32 bg-white rounded-lg m-2'>
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