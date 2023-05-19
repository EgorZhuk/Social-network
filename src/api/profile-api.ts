import {instance} from 'api/api-instance';
import {UserProfileType} from 'redux/profile-reducer';

export const profileAPI = {
  getProfile(userId: string = '2') {
    return instance.get<UserProfileType>(`/profile/${userId}`)
      .then(res => {
        return res.data;
      });
  },
  getStatus(userId: string) {
    return instance.get<string>(`/profile/status/${userId}`);

  },
  updateStatus(status: string) {
    return instance.put<ResponseStatusType>('/profile/status', {status});

  }
};

export type ResponseStatusType = {
  resultcode: number
  messages: string[]
  data: UserProfileType
}
