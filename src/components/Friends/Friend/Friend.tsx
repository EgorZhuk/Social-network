import React from 'react';
import classes from '../Friends.module.css';
import {FriendsDataType} from '../../../redux/friends-reducer';

type PropsType = {
  friendsData: FriendsDataType[]
}

export const Friend = (props: PropsType) => {

  let friendsForRender = props.friendsData.map(el =>
    <div key={el.id} className={classes.friendCard}>
      <img src={el.url} className={classes.img} alt={'friendAvatar'}/>
      <p>{el.name}</p>
    </div>);

  return (
    <div className={classes.friendsWrapper}>
      {friendsForRender}
    </div>
  );
};

