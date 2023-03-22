import {addPostAC, profileReducer, updatePostTextAC} from './profile-reducer';
import {dialogsReducer, sendNewMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';

let store: StoreType = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Yo! Howdy', likes: 1},
        {id: 2, message: 'My first post', likes: 13},
        {id: 2, message: 'My first post', likes: 13},
      ],
      postText: '', //post text buffer
    },
    dialogsPage: {
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
      newMessageBody: '', // message text buffer
    },
    friendsPage: {
      friendsData: [
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
    },
    sideBar: {
      sideBarData: [
        1,
        2
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost(postMessage: string) {
    let newPost: PostDataType = {id: 5, message: postMessage, likes: 0};

    this._state.profilePage.postData.unshift(newPost);
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export type ActionsTypes =
  | AddPostActionType
  | UpdatePostTextActionType
  | UpdateNewMessageBodyActionType
  | SendNewMessageActionType;

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>;
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>;
type SendNewMessageActionType = ReturnType<typeof sendNewMessageAC>;


export type PostDataType = {
  id: number;
  message: string;
  likes: number;
};

export type MessagesDataType = {
  id?: number;
  message: string;
};

export type DialogsDataType = {
  id?: number;
  name: string;
  url: string;
};

export type FriendsDataType = {
  id?: number;
  name: string;
  url: string;
};

export type ProfilePageStateType = {
  postData: Array<PostDataType>;
  postText: string;
};

export type DialogsPageStateType = {
  messagesData: Array<MessagesDataType>;
  dialogsData: Array<DialogsDataType>;
  newMessageBody: string;
};
export type SideBarStateType = {
  sideBarData: Array<number>
}

export type FriendsPageStateType = {
  friendsData: Array<FriendsDataType>;
};

export type StoreType = {
  _state: StateType;
  _callSubscriber: (state: StateType) => void;
  addPost: (postMessage: string) => void;
  subscribe: (callback: (state: StateType) => void) => void;
  getState: () => StateType;
  dispatch: (action: ActionsTypes) => void;
};

export type StateType = {
  profilePage: ProfilePageStateType;
  dialogsPage: DialogsPageStateType;

  sideBar: SideBarStateType
  friendsPage: FriendsPageStateType;
};
export default store;