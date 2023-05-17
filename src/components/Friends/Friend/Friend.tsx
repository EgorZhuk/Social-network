import React from 'react';
import s from 'components/Users/User/User.module.css';
import {NavLink} from 'react-router-dom';
import user from 'assets/images/user.png';

type PropsType = {
  id: number,
  name: string,
  followed: boolean,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  uniqueUrlName: string | null,
  disable: number[],
}

export const Friend = (props: PropsType) => {
  return (
    <div key={props.id} className={s.userCard}>
      <div className={s.userImage}>
        <NavLink to={'/profile/' + props.id}>
          <img
            src={(props.photos.small) ? props.photos.small : user}
            alt="avatar"/>
        </NavLink>

      </div>
      <div className={s.userInfo}>
        <div className={s.userTitle}>
          <p className={s.userName}>{props.name}</p>
          <p className={s.userStatus}>{props.status}</p>
        </div>
        <div className={s.userLocation}>
          <p>{'props.location.city'},</p>
          <p>{'props.location.country'}</p>
        </div>
      </div>
    </div>
  );


};

