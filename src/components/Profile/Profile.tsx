import React from 'react';
import {BgImage} from './BgImage/BgImage';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageStateType, StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import {PostDataType} from '../../index';


type AllPropsType = {
  store: StoreType
  // profilePage: ProfilePageStateType
  // dispatch: (action: ActionsTypes) => void
}
const Profile = (props: AllPropsType) => {
  let state = props.store.getState();
  return (
    <div>
      <BgImage/>
      <ProfileInfo/>
      <MyPostsContainer
        profilePage={state.profilePage}
        dispatch={props.store.dispatch}
      />
    </div>
  );
};

export default Profile;