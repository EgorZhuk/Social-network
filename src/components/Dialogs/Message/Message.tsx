import classes from '../Dialogs.module.css';
import React from 'react';
import {MessagesDataType} from '../../../redux/store';



export const Message = (props: MessagesDataType) => {

  return (
    <div className={classes.message}>{props.message}</div>
  );
};