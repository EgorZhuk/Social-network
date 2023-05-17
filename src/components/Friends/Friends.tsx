import React from 'react';
import {Friend} from './Friend/Friend';
import {FriendsPropsType} from './FriendsContainer';
import {ResponseUsersType} from 'redux/users-reducer';
import s from 'components/Users/Users.module.css';
import {Pagination, Spin} from 'antd';
import User from 'components/Users/User/User';

type PropsType = {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
  items: ResponseUsersType[]
  isFetching: boolean,
  disableInProgress: number[]
}

export const Friends = (props: PropsType) => {

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
            <Friend id={u.id}
                    key={index}
                    photos={u.photos}
                    followed={u.followed}
                    name={u.name}
                    status={u.status}
                    uniqueUrlName={u.uniqueUrlName}
                    disable={props.disableInProgress}
            />
          );
        })
      }
    </div>
  );
};

