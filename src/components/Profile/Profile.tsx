import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostDataType, ProfilePageStateType} from '../../redux/store';
// import {PostDataType} from '../../index';


type AllPropsType = {
  postData: ProfilePageStateType
  dispatch: (action: ActionsTypes) => void
}
const Profile = (props: AllPropsType) => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPosts
        postData={props.postData}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;