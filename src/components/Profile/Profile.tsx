import React from 'react';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {UserProfileType} from 'redux/profile-reducer';
import {ProfileContainerPropsType} from 'components/Profile/ProfileContainer';
import ProfileStatus from 'components/Profile/ProfileStatus';
import ProfileStatusWithHooks from 'components/Profile/ProfileStatusWithHooks';

export type PropfilePropsType = {
  profile: UserProfileType | null
  status?: string | null
  updateStatus: (status: string) => void

}
const Profile = (props: ProfileContainerPropsType) => {
  return (
    <div>
      {/*<BgImage/>*/}
      <ProfileInfo profile={props.profile}/>
      {/*<ProfileStatus updateStatus={props.updateStatus} status={props.status ? props.status : '---'}/>*/}
      <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status ? props.status : '---'}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;