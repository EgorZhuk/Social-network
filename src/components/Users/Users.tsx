import React from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User';
import s from './Users.module.css';

const Users = (props: UsersPropsType) => {
  const showMoreHandler = () => {
    props.setUsers(props.users);
  };
  const followHandler = (userId: number) => {
    props.follow(userId);
  };
  const unFollowHandler = (userId: number) => {
    props.unFollow(userId);
  };

  return (
    <div className={s.userContainer}>
      {
        props.users.map((u, index) => {
          return (
            <User id={u.id}
                  key={index}
                  photoUrl={u.photoUrl}
                  follow={u.follow}
                  fullName={u.fullName}
                  status={u.status}
                  location={u.location}
                  followCalback={followHandler}
                  unFollowCalback={unFollowHandler}/>

          );
        })
      }
      <div>
        <button onClick={showMoreHandler}>Show more</button>
      </div>
    </div>
  );
};

export default Users;