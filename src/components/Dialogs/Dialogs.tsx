import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import AddItemForm, {AddItemFormType} from 'components/AddItemForm/AddItemForm';

export const Dialogs = (props: DialogsPropsType) => {

  const addNewMessage = (values: AddItemFormType) => {
    props.sendMessage(values.newText);
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
      <AddItemForm children={'message'} onSubmit={addNewMessage}/>
    </div>
  );
};
