import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};

export default Profile;