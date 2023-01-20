import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';
// import {PostDataType} from '../../index';


type AllPropsType = {
  postData: Array<PostDataType>
  addPost: (post: string) => void
}
const Profile = (props: AllPropsType) => {
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPosts
        postData={props.postData}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;