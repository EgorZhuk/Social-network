import {AuthStateType} from 'redux/auth-reducer';
import {instance} from 'api/api-instance';
import {apiResponseType} from 'api/api-responseType';

export const authApi = {
  me() {
    return instance.get<apiResponseType<AuthStateType>>(`/auth/me`)
      .then(res => {
          return res.data;
        }
      );
  }
};