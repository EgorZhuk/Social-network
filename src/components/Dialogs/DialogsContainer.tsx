import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogsPageStateType, StoreType} from '../../redux/store';
import {sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import exp from 'constants';

type DialogsStateType = {
  store: StoreType
}


const DialogsContainer = (props: DialogsStateType) => {
  let state = props.store.getState();
  const onUpdateMessageBody = (body: string) => {
    props.store.dispatch(updateNewMessageBodyAC(body));
  };
  const onSendMessage = () => {
    props.store.dispatch(sendNewMessageAC());
  };

  return (
    <Dialogs
      dialogsData={state.dialogsPage.dialogsData}
      messageData={state.dialogsPage.messagesData}
      newMessageBody={state.dialogsPage.newMessageBody}
      sendMessage={onSendMessage}
      updateMessageBody={onUpdateMessageBody}
    />
    // <div className={classes.dialogs}>
    //   <div className={classes.dialogsItems}>
    //     {dialogsData}
    //   </div>
    //
    //   <div className={classes.messages}>
    //     {messagesData}
    //   </div>
    //   <div>
    //     <textarea onChange={onChangeHandler} placeholder={'Enter your message'}
    //               value={props.dialogData.newMessageBody}></textarea>
    //     <button onClick={onClickHandler}>Send message</button>
    //   </div>
    // </div>
  );
};
export default DialogsContainer;