import {AppDispatch} from 'redux/redux-store';
import {authApi, LoginDataType} from 'api/auth-api';

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
        ...action.payload,
        isAuth: action.payload.isAuth
      };
    default:
      return state;
  }
};

const setAuthUserData = (data: AuthStateType) => ({
  type: SET_USER_DATA,
  payload: data
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
export const userLogin = (loginData: LoginDataType) => (dispatch: AppDispatch) => {
  authApi.login({...loginData})
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
};
export const userLogout = () => (dispatch: AppDispatch) => {
  authApi.logout()
    .then(res => {
      dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}));
    });
};

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>