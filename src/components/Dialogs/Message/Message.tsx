import classes from '../Dialogs.module.css';
import React from 'react';

export type MessagesDataType = {
  id?: number
  message: string
}

export const Message = (props: MessagesDataType) => {

  return (
    <div className={classes.message}>{props.message}</div>
  );
};