import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';

export const Dialogs = (props: DialogsPropsType) => {
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
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>;
  }
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