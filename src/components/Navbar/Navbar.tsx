import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {Friends} from '../Friends/Friends';
import {FriendsDataType} from '../../redux/store';

type NavBarLinkType = {
  id: number
  name: string
  path: string
}

type PropsType = {
  friendsData: FriendsDataType[]
}

const linkData: Array<NavBarLinkType> = [
  {id: 1, name: 'Profile', path: '/profile'},
  {id: 2, name: 'Messages', path: '/dialogs'},
  {id: 3, name: 'News', path: '/news'},
  {id: 4, name: 'Music', path: '/music'},
  {id: 5, name: 'Settings', path: '/settings'},
];



const Navbar = (props: PropsType) => {
  let navbarMenu = linkData.map(el => <div key={el.id} className={classes.item}>
    <NavLink to={el.path} activeClassName={classes.active}>{el.name}</NavLink>
  </div>);
  return <nav className={classes.nav}>
    {navbarMenu}
    <Friends friendsData={props.friendsData}/>
  </nav>;
};

export default Navbar;