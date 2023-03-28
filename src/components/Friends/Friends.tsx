import React from 'react';
import {Friend} from './Friend/Friend';
import {FriendsPropsType} from './FriendsContainer';



export const Friends = (props: FriendsPropsType) => {

  return (
    <div>
      <Friend friendsData={props.friendsData}

      />
    </div>
  );
};

