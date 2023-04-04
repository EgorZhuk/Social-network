import React from 'react';
import s from 'components/Users/Users.module.css';
import Pagination from 'components/Users/Pagination/Pagination';
import User from 'components/Users/User/User';
import {ResponseUsersType} from 'redux/users-reducer';

type PropsType = {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
  items: ResponseUsersType[]
  followCalback: (userId: number) => void
  unFollowCalback: (userId: number) => void
}

const Users = (props: PropsType) => {
  return (
    <div className={s.userContainer}>
      <div className={s.pagesBlock}>
        <Pagination
          totalPages={props.totalPages}
          setCurrentPage={props.setCurrentPage}
          currentPage={props.currentPage}
        />
      </div>
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
                  followCalback={props.followCalback}
                  unFollowCalback={props.unFollowCalback}/>
          );
        })
      }
      {/*<div>*/}
      {/*  /!*<button onClick={this.showMoreHandler}>Show more</button>*!/*/}
      {/*</div>*/}
    </div>
  );
};

export default Users;