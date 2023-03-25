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
      let newPost = {
        id: 5,
        message: state.postText,
        likes: 0,
      };
      state.postData.unshift(newPost);
      state.postText = '';
      return state;
    }
    case 'UPDATE-POST-TEXT': {
      state.postText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

export const addPostAC = () =>
  ({type: ADD_POST} as const);
export const updatePostTextAC = (newText: string) =>
  ({type: UPDATE_POST_TEXT, newText: newText,} as const);

