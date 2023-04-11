// import React from 'react';
import {DialogsDataType, MessagesDataType, sendNewMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';

//
type MapStateToPropsType = {
  dialogsData: DialogsDataType[],
  messageData: MessagesDataType[],
  newMessageBody: string
  isAuth: boolean
}

type MapDispatchToProps = {
  sendMessage: () => void
  updateMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messagesData,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    sendMessage: () => dispatch(sendNewMessageAC()),
    updateMessageBody: (body: string) => dispatch(updateNewMessageBodyAC(body))
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;