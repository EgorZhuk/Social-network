import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {}

export const Dialogs = (props: PropsType) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/1" activeClassName={classes.active}>One</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2" activeClassName={classes.active}>Two</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3" activeClassName={classes.active}>Three</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4" activeClassName={classes.active}>Four</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/5" activeClassName={classes.active}>Five</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hello</div>
        <div className={classes.message}>How are you</div>
        <div className={classes.message}>Yo</div>
      </div>
    </div>
  );
};