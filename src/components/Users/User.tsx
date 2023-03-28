import React from 'react';
import s from './User.module.css';
import {usersType} from '../../redux/users-reducer';

type PropsType = {
  users: usersType[]
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: () => void
}
const User = (props: PropsType) => {
  const showMoreHandler = () => {
    props.setUsers();
  };


  let usersForRender = props.users.map((el) =>
    <div className={s.userCard}>
      <div className={s.userImage}>
        <img
          src={el.photoUrl}
          alt="avatar"/>
        {el.follow
          ? <button onClick={() => {
            props.unFollow(el.id);
          }}>Unfollow</button>
          : <button onClick={() => {
            props.follow(el.id);
          }}>Follow</button>
        }

      </div>

      <div className={s.userInfo}>
        <div className={s.userTitle}>
          <p className={s.userName}>{el.fullName}</p>
          <p className={s.userStatus}>{el.status}</p>
        </div>
        <div className={s.userLocation}>
          <p>{el.location.country},</p>
          <p>{el.location.city}</p>
        </div>
      </div>

    </div>
  );

  return (<>
      <div className={s.userContainer}>
        {usersForRender}
        <button onClick={showMoreHandler}>SHOW MORE</button>
      </div>

    </>
  );
};

export default User;