import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';
// import {PostDataType} from '../../index';


type AllPropsType = {
  postData: Array<PostDataType>
}
const Profile = (props: AllPropsType) => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPosts postData={props.postData}/>
    </div>
  );
};

export default Profile;