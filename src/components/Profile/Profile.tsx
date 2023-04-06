import React from 'react';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {UserProfileType} from 'redux/profile-reducer';
import {ProfileContainerPropsType} from 'components/Profile/ProfileContainer';

export type PropfilePropsType = {
  profile: UserProfileType | null

}
const Profile = (props: ProfileContainerPropsType) => {
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