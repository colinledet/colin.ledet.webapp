import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/apps">
            Apps
          </a>
        </Menu>
      );
}

export default Sidebar;