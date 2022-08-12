import React from 'react';
import { Icon } from 'react-icons-kit';
import {androidMicrophone} from 'react-icons-kit/ionicons/androidMicrophone';
import {gearA} from 'react-icons-kit/ionicons/gearA';
import './header.css'

const Nav = () => {
  return (
    <div className='nav-contain'>
        <div>
          <h2>The Games Database</h2>
        </div>
        <div className='icon-contain'>
          <Icon icon={androidMicrophone} size={30} />
          <Icon icon={gearA} size={30} />
        </div>
    </div>
  );
};

export default Nav;