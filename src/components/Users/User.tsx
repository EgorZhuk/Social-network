import React from 'react';
import s from './User.module.css';

type PropsType = {
  id: number,
  photoUrl: string
  follow: boolean
  fullName: string,
  status: string,
  location: {
    city: string,
    country: string
  }
  followCalback: (userId: number) => void
  unFollowCalback: (userId: number) => void

}
const User = (props: PropsType) => {
  return (
    <div key={props.id} className={s.userCard}>
      <div className={s.userImage}>
        <img
          src={props.photoUrl}
          alt="avatar"/>
        {props.follow
          ? <button onClick={() => {
            props.unFollowCalback(props.id);
          }}>Unfollow</button>
          : <button onClick={() => {
            props.followCalback(props.id);
          }}>Follow</button>
        }

      </div>

      <div className={s.userInfo}>
        <div className={s.userTitle}>
          <p className={s.userName}>{props.fullName}</p>
          <p className={s.userStatus}>{props.status}</p>
        </div>
        <div className={s.userLocation}>
          <p>{props.location.country},</p>
          <p>{props.location.city}</p>
        </div>
      </div>

    </div>
  );


};

export default User;