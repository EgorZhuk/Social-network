import axios from 'axios';
import {UserContainerGetResponseType} from 'redux/users-reducer';
import {instance} from 'api/api-instance';
import {apiResponseType} from 'api/api-responseType';


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