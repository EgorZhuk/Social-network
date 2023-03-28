const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type usersType = {
  id: number,
  photoUrl: string
  follow: boolean
  fullName: string,
  status: string,
  location: {
    city: string,
    country: string
  }
}

export type UsersPageStateType = {
  users: Array<usersType>
}

let initialState: UsersPageStateType = {
  users: [
    {
      id: 1,
      photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
      follow: false,
      fullName: 'Dmitry',
      status: 'I am a boss',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 2,
      photoUrl: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
      follow: false,
      fullName: 'Alex',
      status: 'I am a boss to',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      id: 3,
      photoUrl: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg',
      follow: true,
      fullName: 'Olga',
      status: 'Yo',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 4,
      photoUrl: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg',
      follow: true,
      fullName: 'Andrey',
      status: 'Hello',
      location: {
        city: 'Warsaw',
        country: 'Poland'
      }
    },
  ]
};

const usersReducer = (state: UsersPageStateType = initialState, action: UsersPageActionsType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, follow: true};
          }
          return user;
        })

      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, follow: false};
          }
          return user;
        })

      };
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users} as const);


export type UsersPageActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>

export default usersReducer;