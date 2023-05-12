// import React from 'react';
import React from 'react';
import {DialogsDataType, MessagesDataType, sendNewMessageAC, updateNewMessageBodyAC} from 'redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootState} from 'redux/redux-store';
import {compose, Dispatch} from 'redux';

import {withAuthRedirect} from 'hoc/withAuthRedirect';

//
type MapStateToPropsType = {
  dialogsData: DialogsDataType[],
  messageData: MessagesDataType[],
  newMessageBody: string
}

type MapDispatchToProps = {
  sendMessage: (body: string) => void
  updateMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messagesData,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    sendMessage: (body: string) => dispatch(sendNewMessageAC(body)),
    updateMessageBody: (body: string) => dispatch(updateNewMessageBodyAC(body))
  };
};

const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
export default DialogsContainer;