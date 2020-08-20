import React from 'react';

import { Avatar } from '@material-ui/core';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* { Avatar for logged in user} */}
        <Avatar
          className="header__avatar"
          alt="sherwin"
          src="https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg"
        />
        {/* {timeicon} */}
        <AccessTimeOutlined />
      </div>
      <div className="header__search">
        {/* {search icon} */}
        <SearchIcon />
        {/* {search bar} */}
        <input placeholder="search sherwin slack" />
      </div>
      <div className="header__right">
        {/* {help icon} */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
