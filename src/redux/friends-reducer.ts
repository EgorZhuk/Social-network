import {AppDispatch} from 'redux/redux-store';
import {friendsAPI} from 'api/friends-api';


const SET_FRIENDS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_LOADER = 'SET-LOADER';
const IS_DISABLE = 'IS-DISABLE';

export type UserContainerGetResponseType = {
  items: ResponseUsersType[],
  totalCount: number,
  error: string | null
}
export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  data: D
}
export type ResponseUsersType = {
  id: number,
  name: string,
  followed: boolean,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  uniqueUrlName: string | null,
}


let initialState = {
  items: [] as ResponseUsersType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  disabled: true,
  disableInProgress: [] as number[]
};
export type UsersPageStateType = typeof initialState
export const friendsReducer = (state: UsersPageStateType = initialState, action: UsersPageActionsType) => {
  switch (action.type) {


    case SET_FRIENDS:
      return {
        ...state, items: action.items
      };
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.value
      };
    case SET_TOTAL_COUNT:
      return {
        ...state, totalUsersCount: action.count
      };
    case SET_LOADER:
      return {
        ...state, isFetching: action.isFetching
      };
    case IS_DISABLE:
      return {
        ...state,
        disableInProgress: action.disable ?
          [...state.disableInProgress, action.userId] : state.disableInProgress.filter(userId => userId !== action.userId)
      };
    default:
      return state;
  }
};


const setFriends = (items: ResponseUsersType[]) => ({type: SET_FRIENDS, items} as const);
const setCurrentPage = (value: number) => ({type: SET_CURRENT_PAGE, value} as const);
const setTotalCount = (count: number) => ({type: SET_TOTAL_COUNT, count} as const);
const setLoader = (isFetching: boolean) => ({type: SET_LOADER, isFetching} as const);
const isDisable = (disable: boolean, userId: number) => ({type: IS_DISABLE, disable, userId} as const);

export const getFriends = (currentPage: number, pageSize: number) => (dispatch: AppDispatch) => {
  dispatch(setLoader(true));
  friendsAPI.getFriends(currentPage, pageSize, true)
    .then(data => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setFriends(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(setLoader(false));
    });
};

export type UsersPageActionsType =
  | ReturnType<typeof setFriends>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setLoader>
  | ReturnType<typeof isDisable>

export default friendsReducer;

