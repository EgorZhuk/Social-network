import React from 'react';
import {Friend} from './Friend/Friend';
import {FriendsPropsType} from '../Navbar/FriendsContainer';



export const Friends = (props: FriendsPropsType) => {

  return (
    <div>
      Friends
      <Friend friendsData={props.friendsData}/>
    </div>
  );
};

