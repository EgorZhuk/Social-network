import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostData} from '../../index';

const Profile = (props: PostData) => {

  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPosts postData={props.postData}/>
    </div>
  );
};

export default Profile;