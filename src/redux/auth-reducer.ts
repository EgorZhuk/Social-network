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

export type AuthContainerResponseType = {
  data: AuthStateType,
  filedsError: [],
  messages: string[],
  resultCode: number
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

export const setAuthUserData = (data: AuthStateType) => ({
  type: SET_USER_DATA,
  data
} as const);

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>