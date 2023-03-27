const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export type PostDataType = {
  id: number;
  message: string;
  likes: number;
};

export type ProfilePageStateType = {
  postData: Array<PostDataType>;
  postText: string;
};

export type ProfileReducersActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostTextAC>


let initialState: ProfilePageStateType = {
  postData: [
    {id: 1, message: 'Yo! Howdy', likes: 1},
    {id: 2, message: 'My first post', likes: 13},
    {id: 2, message: 'My first post', likes: 13},
  ],
  postText: ''
};

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileReducersActionType) => {

  switch (action.type) {
    case 'ADD-POST': {

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
    case 'UPDATE-POST-TEXT': {
      return {
        ...state,
        postText: action.newText
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

