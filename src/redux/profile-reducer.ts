import {AppDispatch} from 'redux/redux-store';
import {profileAPI} from 'api/profile-api';

const ADD_POST = 'ADD-POST';
const SET_USER = 'SET-USER';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

export type PostDataType = {
  id: number;
  message: string;
  likes: number;
};
export type UserProfileType = {
  aboutMe: string,
  userId: number,
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
  }
  photos: {
    small: string | null
    large: string | null
  }
}
export type ProfilePageStateType = {
  postData: Array<PostDataType>;
  userProfile: UserProfileType | null
  status: string | null
};

export type ProfileReducersActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof updateUserStatus>


let initialState: ProfilePageStateType = {
  postData: [
    {id: 1, message: 'Yo! Howdy', likes: 1},
    {id: 2, message: 'My first post', likes: 13},
    {id: 2, message: 'My first post', likes: 13},
  ],
  userProfile: null,
  status: null
};

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileReducersActionType) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [{
          id: 5,
          message: action.newText,
          likes: 0,
        }, ...state.postData],
        postText: '',
      };
    }

    case SET_USER: {
      return {
        ...state,
        userProfile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

export const addPostAC = (newText: string) =>
  ({type: ADD_POST, newText} as const);
const setUserProfile = (profile: UserProfileType) =>
  ({type: SET_USER, profile} as const);
const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const);
const updateUserStatus = (status: string) => ({type: UPDATE_STATUS, status} as const);


export const getProfile = (userId: string) => (dispatch: AppDispatch) => {
  return profileAPI.getProfile(userId)
    .then(profile => {
      return dispatch(setUserProfile(profile));
    });

};
export const getStatus = (userId: string) => (dispatch: AppDispatch) => {
  return profileAPI.getStatus(userId)
    .then(status => {
      return dispatch(setUserStatus(status.data));
    });
};
export const updateStatus = (status: string) => (dispatch: AppDispatch) => {
  return profileAPI.updateStatus(status)
    .then(res => {
      if (res.data.resultcode === 0) {
        return dispatch(updateUserStatus(status));
      }

    });
};