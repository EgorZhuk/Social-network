import React, {ReactNode} from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';
import {
  UserOutlined,
  MessageOutlined,
  GlobalOutlined,
  PlayCircleOutlined,
  ControlOutlined,
  TeamOutlined,
  AuditOutlined
} from '@ant-design/icons';

type NavBarLinkType = {
  id: number
  name: string
  path: string
  icon?: ReactNode
}



const linkData: Array<NavBarLinkType> = [
  {id: 1, name: 'Profile', path: '/profile', icon: <UserOutlined/>},
  {id: 2, name: 'Messages', path: '/dialogs', icon: <MessageOutlined/>},
  {id: 3, name: 'News', path: '/news', icon: <GlobalOutlined/>},
  {id: 4, name: 'Music', path: '/music', icon: <PlayCircleOutlined/>},
  {id: 5, name: 'Settings', path: '/settings', icon: <ControlOutlined/>},
  {id: 6, name: 'Users', path: '/users', icon: <AuditOutlined/>},
  {id: 7, name: 'Friends', path: '/friends', icon: <TeamOutlined/>},
];



const Navbar = () => {
  let navbarMenu = linkData.map(el => <div key={el.id} className={classes.item}>
    <NavLink
      to={el.path}
      activeClassName={classes.active}>
      <div className={classes.itemContainer}>
        {el.icon} {el.name}
      </div>

    </NavLink>
  </div>);
  return <nav className={classes.nav}>
    {navbarMenu}
    <FriendsContainer/>
  </nav>;
};

export default Navbar;