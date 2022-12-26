import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';

const Profile = () => {
  return (
    <div>
      <BgImage/>
      <div>
        ava+descr
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;