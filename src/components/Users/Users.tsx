import React from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User';

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
    <div>
      <User
        users={props.users}
        follow={followHandler}
        unFollow={unFollowHandler}
        setUsers={showMoreHandler}
      />

    </div>
  );
};

export default Users;