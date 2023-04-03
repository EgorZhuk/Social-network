import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import User from './User';
import {ResponseUsersType} from 'redux/users-reducer';

class Users extends React.Component<UsersPropsType, ResponseUsersType> {
  constructor(props: UsersPropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  }

  showMoreHandler = () => {
    this.props.setUsers(this.props.items);
  };
  followHandler = (userId: number) => {
    this.props.follow(userId);
  };
  unFollowHandler = (userId: number) => {
    this.props.unFollow(userId);
  };

  render() {
    return <div className={s.userContainer}>
      {

        this.props.items.map((u, index) => {
          return (
            <User id={u.id}
                  key={index}
                  photos={u.photos}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
                  uniqueUrlName={u.uniqueUrlName}
              // location={u.location}
                  followCalback={this.followHandler}
                  unFollowCalback={this.unFollowHandler}/>
          );
        })
      }
      <div>
        <button onClick={this.showMoreHandler}>Show more</button>
      </div>
    </div>;

  }

}

export default Users;