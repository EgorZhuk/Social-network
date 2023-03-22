import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogsDataType, DialogsPageStateType, MessagesDataType} from '../../redux/store';
import {sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

type DialogsStateType = {
  dialogsData: DialogsDataType[]
  messageData: MessagesDataType[]
  newMessageBody: string
  sendMessage: () => void
  updateMessageBody: (body: string) => void
}


export const Dialogs = (props: DialogsStateType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let body = event.currentTarget.value;
    props.updateMessageBody(body);
  };
  const onClickHandler = () => {
    props.sendMessage();
  };
  let dialogsData = props.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}
                                                            url={el.url}/>);
  let messagesData = props.messageData.map(el => <Message key={el.id} message={el.message}/>);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData}
      </div>

      <div className={classes.messages}>
        {messagesData}
      </div>
      <div>
        <textarea onChange={onChangeHandler} placeholder={'Enter your message'}
                  value={props.newMessageBody}></textarea>
        <button onClick={onClickHandler}>Send message</button>
      </div>
    </div>
  );
};