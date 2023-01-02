import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

type NavBarLinkType = {
  name: string
  path: string
}

const linkData: Array<NavBarLinkType> = [
  {name: 'Profile', path: '/profile'},
  {name: 'Messages', path: '/dialogs'},
  {name: 'News', path: '/news'},
  {name: 'Music', path: '/music'},
  {name: 'Settings', path: '/settings'},
];



const Navbar = () => {
  return (
    <nav className={classes.nav}>
      {
        linkData.map(el => {
          return (
            <div className={classes.item}>
              <NavLink to={el.path} activeClassName={classes.active}>{el.name}</NavLink>
            </div>
          );
        })
      }
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>*/}
      {/*</div>*/}
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>*/}
      {/*</div>*/}
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/news" activeClassName={classes.active}>News</NavLink>*/}
      {/*</div>*/}
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>*/}
      {/*</div>*/}
      {/*<div className={classes.item}>*/}
      {/*  <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>*/}
      {/*</div>*/}
    </nav>
  );
};

export default Navbar;