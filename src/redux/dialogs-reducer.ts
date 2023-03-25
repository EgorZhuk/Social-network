const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type MessagesDataType = {
  id?: number;
  message: string;
};

export type DialogsDataType = {
  id?: number;
  name: string;
  url: string;
};



export type DialogsPageStateType = {
  messagesData: Array<MessagesDataType>;
  dialogsData: Array<DialogsDataType>;
  newMessageBody: string;
};

export type DialogReducerActionsType =
  | ReturnType<typeof sendNewMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>

let initialState: DialogsPageStateType = {
  messagesData: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
  ],
  dialogsData: [
    {
      id: 1,
      name: 'One',
      url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
    },
    {
      id: 2,
      name: 'Two',
      url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
    },
    {
      id: 3,
      name: 'Three',
      url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg',
    },
    {
      id: 4,
      name: 'Four',
      url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg',
    },
    {
      id: 5,
      name: 'Five',
      url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg',
    },
  ],
  newMessageBody: '',
};

export const dialogsReducer = (state: DialogsPageStateType = initialState, action: DialogReducerActionsType) => {

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
