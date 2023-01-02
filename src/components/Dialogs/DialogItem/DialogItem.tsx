import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogsDataType = {
  id?: number
  name: string
}

export const DialogItem = (props: DialogsDataType) => {

  let path: string = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
};
