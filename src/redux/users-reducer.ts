import userAPI from 'api/api';
import {ThunkDispatch} from 'redux-thunk';
import {AppDispatch} from 'redux/redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
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
export const usersReducer = (state: UsersPageStateType = initialState, action: UsersPageActionsType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        })

      };
    case UNFOLLOW:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        })

      };
    case SET_USERS:
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

const followSucces = (userId: number) => ({type: FOLLOW, userId} as const);
const unFollowSucces = (userId: number) => ({type: UNFOLLOW, userId} as const);
const setUsers = (items: ResponseUsersType[]) => ({type: SET_USERS, items} as const);
const setCurrentPage = (value: number) => ({type: SET_CURRENT_PAGE, value} as const);
const setTotalCount = (count: number) => ({type: SET_TOTAL_COUNT, count} as const);
const setLoader = (isFetching: boolean) => ({type: SET_LOADER, isFetching} as const);
const isDisable = (disable: boolean, userId: number) => ({type: IS_DISABLE, disable, userId} as const);

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: AppDispatch) => {
  dispatch(setLoader(true));
  userAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(setLoader(false));
    });
};
export const follow = (userId: number) => (dispatch: AppDispatch) => {
  dispatch(isDisable(true, userId));
  userAPI.followUser(userId)
    .then(resultCode => {
        if (resultCode === 0) {
          dispatch(followSucces(userId));
          dispatch(isDisable(false, userId));
        }
      }
    );
};
export const unfollow = (userId: number) => (dispatch: AppDispatch) => {
  dispatch(isDisable(true, userId));
  userAPI.unFollowUser(userId)
    .then(resultCode => {
        if (resultCode === 0) {
          dispatch(unFollowSucces(userId));
          dispatch(isDisable(false, userId));
        }
      }
    );
};


export type UsersPageActionsType =
  | ReturnType<typeof followSucces>
  | ReturnType<typeof unFollowSucces>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setLoader>
  | ReturnType<typeof isDisable>

export default usersReducer;

