import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesDataType} from '../../redux/state';

type StateType = {
  state: PropsType
}
type PropsType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}

export const Dialogs = (props: StateType) => {

  let dialogsData = props.state.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} url={el.url}/>);
  let messagesData = props.state.messagesData.map(el => <Message key={el.id} message={el.message}/>);
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