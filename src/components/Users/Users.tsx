import React from 'react';
import s from 'components/Users/Users.module.css';
import User from 'components/Users/User/User';
import {ResponseUsersType} from 'redux/users-reducer';
import {Pagination, Spin} from 'antd';

type PropsType = {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
  items: ResponseUsersType[]
  followCalback: (userId: number) => void
  unFollowCalback: (userId: number) => void
  isFetching: boolean,
  disableInProgress: number[]
}

const Users = (props: PropsType) => {
  const onChange = (page: number) => {
    props.setCurrentPage(page);
  };
  return (
    <div className={s.userContainer}>

      <div className={s.pagesBlock}>
        <Pagination
          onChange={onChange}
          current={props.currentPage}
          total={props.totalPages}
          pageSize={10}
          showSizeChanger={false}
        />
      </div>
      {props.isFetching && <Spin size={'large'} tip={'Loading'}/>}
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
                  unFollowCalback={props.unFollowCalback}
                  disable={props.disableInProgress}

            />
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