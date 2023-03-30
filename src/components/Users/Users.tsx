import React from 'react';
import {UsersPropsType} from './UsersContainer';
import User from './User';
import s from './Users.module.css';
import axios from 'axios';

const Users = (props: UsersPropsType) => {

  if (props.items.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        props.setUsers(res.data.items);
      });

    // props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
    //     follow: false,
    //     fullName: 'Dmitry',
    //     status: 'I am a boss',
    //     location: {
    //       city: 'Minsk',
    //       country: 'Belarus'
    //     }
    //   },
    //   {
    //     id: 2,
    //     photoUrl: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
    //     follow: false,
    //     fullName: 'Alex',
    //     status: 'I am a boss to',
    //     location: {
    //       city: 'Moscow',
    //       country: 'Russia'
    //     }
    //   },
    //   {
    //     id: 3,
    //     photoUrl: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg',
    //     follow: true,
    //     fullName: 'Olga',
    //     status: 'Yo',
    //     location: {
    //       city: 'Minsk',
    //       country: 'Belarus'
    //     }
    //   },
    //   {
    //     id: 4,
    //     photoUrl: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg',
    //     follow: true,
    //     fullName: 'Andrey',
    //     status: 'Hello',
    //     location: {
    //       city: 'Warsaw',
    //       country: 'Poland'
    //     }
    //   },
    // ]);
  }

  const showMoreHandler = () => {
    props.setUsers(props.items);
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
        props.items.map((u, index) => {
          return (
            <User id={u.id}
                  key={index}
                  photos={u.photos}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
                  uniqueUrlName={u.uniqueUrlName}
              // location={u.location}
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