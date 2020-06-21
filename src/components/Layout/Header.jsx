import React from 'react';

import logo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='' />
      <div className='navigation'>
        <a href='#features'>Features</a>
        <a href='#team'>Team</a>
        <a>Sign In</a>
      </div>
    </nav>
  );
};

export default Header;
