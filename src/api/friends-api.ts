import {instance} from 'api/api-instance';
import {UserContainerGetResponseType} from 'redux/users-reducer';

type FriendsRequestType = {
  count: number
  page: number
  term: string
  friend: boolean
}

export const friendsAPI = {
  getFriends(currentPage: number = 1, pageSize: number = 10, friend: boolean) {
    return instance.get<UserContainerGetResponseType>('users', {
      params: {
        page: currentPage,
        count: pageSize,
        friend: friend
      }
    })
      .then(res => {
        return res.data;
      });
  }
};