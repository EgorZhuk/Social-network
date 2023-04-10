import {instance} from 'api/api-instance';
import {UserProfileType} from 'redux/profile-reducer';

export const profileAPI = {
  getProfile(userId: string = '2') {
    return instance.get<UserProfileType>(`/profile/${userId}`)
      .then(res => {
        return res.data;
      });

  }
};