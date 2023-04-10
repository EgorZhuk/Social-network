import {AppDispatch} from 'redux/redux-store';
import {authApi} from 'api/auth-api';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};
export type AuthStateType = {
  id: number | null,
  email: string | null,
  login: string | null
  isAuth: boolean
}
export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth
      };
    default:
      return state;
  }
};

const setAuthUserData = (data: AuthStateType) => ({
  type: SET_USER_DATA,
  data
} as const);

export const getAuthUserData = () => (dispatch: AppDispatch) => {
  authApi.me()
    .then(data => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data;
          dispatch(setAuthUserData({id, email, login, isAuth: true}));
        }
      }
    );
  ;
};

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>