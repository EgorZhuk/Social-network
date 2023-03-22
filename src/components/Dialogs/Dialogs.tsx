import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogsPageStateType} from '../../redux/store';
import {sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

type DialogsStateType = {
  dialogData: DialogsPageStateType
  dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: DialogsStateType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let body = event.currentTarget.value;
    props.dispatch(updateNewMessageBodyAC(body));
  };
  const onClickHandler = () => {
    props.dispatch(sendNewMessageAC());
  };
  let dialogsData = props.dialogData.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}
                                                                       url={el.url}/>);
  let messagesData = props.dialogData.messagesData.map(el => <Message key={el.id} message={el.message}/>);
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
                  value={props.dialogData.newMessageBody}></textarea>
        <button onClick={onClickHandler}>Send message</button>
      </div>
    </div>
  );
};