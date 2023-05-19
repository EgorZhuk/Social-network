import {AppDispatch} from 'redux/redux-store';
import {getAuthUserData} from 'redux/auth-reducer';

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
  initialized: false
};
export type AppStateType = {
  initialized: boolean
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData())
    .then(() => dispatch(setInitialized()))
  ;
};

const setInitialized = () => ({type: SET_INITIALIZED} as const);

export type AppActionsType =
  | ReturnType<typeof setInitialized>