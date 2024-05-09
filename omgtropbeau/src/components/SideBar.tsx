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

      <nav className=''>
        sa
      </nav>


    </div>
  );
};

export default SideBar;