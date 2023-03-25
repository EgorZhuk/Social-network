import React from 'react';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = () => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPostsContainer

      />
    </div>
  );
};

export default Profile;