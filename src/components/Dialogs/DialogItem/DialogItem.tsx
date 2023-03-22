import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsDataType} from '../../../redux/store';

export const DialogItem = (props: DialogsDataType) => {

  let path: string = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      <img className={classes.friendImg} src={props.url}/>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
};
