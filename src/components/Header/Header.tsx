import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1><span>S</span>ocial<span>N</span>etwork</h1>
      {/*<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt=""/>*/}
    </header>
  );
};

export default Header;