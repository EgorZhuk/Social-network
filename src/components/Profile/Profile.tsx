import React from 'react';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {UserProfileType} from 'redux/profile-reducer';

export type PropfilePropsType = {
  profile: UserProfileType | null

}
const Profile = (props: PropfilePropsType) => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer

      />
    </div>
  );
};

export default Profile;