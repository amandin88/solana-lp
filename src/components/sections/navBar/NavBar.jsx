import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '/img/logos/logo.png';
import { Menu } from '../../elements';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-inner'>
        <Link to='/'>
          <img src={LogoImg} alt='' />
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
