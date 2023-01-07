import React from 'react';
import {Friend} from './Friend/Friend';
import classes from './Friends.module.css';
import {FriendsDataType} from '../../redux/state';

type PropsType = {
  friendsData: FriendsDataType[]
}

export const Friends = (props: PropsType) => {

  return (
    <div>
      Friends
      <Friend friendsData={props.friendsData}/>
    </div>
  );
};

