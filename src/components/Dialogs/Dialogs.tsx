import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesDataType, StateType} from '../../redux/state';

type PropsType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}

export const Dialogs = (props: PropsType) => {

  let dialogsData = props.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
  let messagesData = props.messagesData.map(el => <Message key={el.id} message={el.message}/>);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData}
      </div>

      <div className={classes.messages}>
        {messagesData}
      </div>
    </div>
  );
};