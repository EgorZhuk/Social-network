import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem, DialogsDataType} from './DialogItem/DialogItem';
import {Message, MessagesDataType} from './Message/Message';

type PropsType = {
  id: number
  name: string
  message?: string
}

let messagesData: Array<MessagesDataType> = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'Yo'},
];

let dialogsData: Array<DialogsDataType> = [
  {id: 1, name: 'One'},
  {id: 2, name: 'Two'},
  {id: 3, name: 'Three'},
  {id: 4, name: 'Four'},
  {id: 5, name: 'Five'}
];

export const Dialogs = (props: PropsType) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {
          dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
        }
      </div>

      <div className={classes.messages}>
        {
          messagesData.map(el => <Message message={el.message}/>)
        }
      </div>
    </div>
  );
};