import axios from 'axios';
import {UserContainerGetResponseType} from 'redux/users-reducer';

export type apiResponseType<T = {}> = {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: 0
}

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': 'c5890106-c6fd-4018-9323-f3f405f33b5d'}
});

const userAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get<UserContainerGetResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        return res.data;
      });
  },
  followUser(userId: number) {
    return instance.post<apiResponseType>(`follow/${userId}`)
      .then(res => {
        return res.data.resultCode;
      });
  },
  unFollowUser(userId: number) {
    return instance.delete<apiResponseType>(`follow/${userId}`)
      .then(res => {
        return res.data.resultCode;
      });
  }
};

export default userAPI;