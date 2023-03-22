import {ActionsTypes, DialogsPageStateType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: DialogsPageStateType, action: ActionsTypes) => {

  switch (action.type) {
    case 'SEND-MESSAGE': {
      let body = state.newMessageBody;
      state.messagesData.push({id: 4, message: body});
      state.newMessageBody = '';

      return state;
    }
    case 'UPDATE-NEW-MESSAGE-BODY': {
      state.newMessageBody = action.newMessageBody;

      return state;
    }
    default :
      return state;
  }
};

export const sendNewMessageAC = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyAC = (newMessage: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessage,} as const);
