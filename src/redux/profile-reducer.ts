import {AppDispatch} from 'redux/redux-store';
import {profileAPI} from 'api/profile-api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER = 'SET-USER';

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
  postText: string;
  userProfile: UserProfileType | null
};

export type ProfileReducersActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostTextAC>
  | ReturnType<typeof setUserProfile>


let initialState: ProfilePageStateType = {
  postData: [
    {id: 1, message: 'Yo! Howdy', likes: 1},
    {id: 2, message: 'My first post', likes: 13},
    {id: 2, message: 'My first post', likes: 13},
  ],
  postText: '',
  userProfile: null
};

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileReducersActionType) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [{
          id: 5,
          message: state.postText,
          likes: 0,
        }, ...state.postData],
        postText: '',
      };
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        postText: action.newText
      };
    }
    case SET_USER: {
      return {
        ...state,
        userProfile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostAC = () =>
  ({type: ADD_POST} as const);
export const updatePostTextAC = (newText: string) =>
  ({type: UPDATE_POST_TEXT, newText: newText,} as const);
const setUserProfile = (profile: UserProfileType) =>
  ({type: SET_USER, profile} as const);

export const getProfile = (userId: string) => (dispatch: AppDispatch) => {
  return profileAPI.getProfile(userId)
    .then(profile => {
      return dispatch(setUserProfile(profile));
    });

};
