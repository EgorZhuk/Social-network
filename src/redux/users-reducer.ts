const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

export type ResponseType = {
  items: ResponseUsersType[],
  totalCount: number,
  error: string | null
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

export type RequestUsersType = {
  count: number,
  page: number,
  term: string,
  friend: boolean
}

// export type UsersPageStateType = {
//   items: Array<ResponseUsersType>
//   pageSize: number,
//   totalUsersCount: number
//   currentPage: number
// }

let initialState = {
  items: [] as ResponseUsersType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 2
};
export type UsersPageStateType = typeof initialState
const usersReducer = (state: UsersPageStateType = initialState, action: UsersPageActionsType) => {
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
    default:
      return state;
  }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (items: ResponseUsersType[]) => ({type: SET_USERS, items} as const);
export const setCurrentAC = (value: number) => ({type: SET_CURRENT_PAGE, value} as const);
export const setTotalCountAC = (count: number) => ({type: SET_TOTAL_COUNT, count} as const);

export type UsersPageActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentAC>
  | ReturnType<typeof setTotalCountAC>

export default usersReducer;

