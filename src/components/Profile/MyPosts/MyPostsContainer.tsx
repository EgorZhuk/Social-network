import React from 'react';
import {ActionsTypes, ProfilePageStateType} from '../../../redux/store';
import {addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type PropsType = {
  profilePage: ProfilePageStateType
  dispatch: (action: ActionsTypes) => void
}
const MyPostsContainer = (props: PropsType) => {
  const onChangeHandler = (newPost: string) => {
    // let newPost = e.currentTarget.value;
    props.dispatch(updatePostTextAC(newPost));
  };

  const onClickHandler = () => {
    props.dispatch(addPostAC(props.profilePage.postText));
  };

  return (
    <MyPosts
      updateNewPostText={onChangeHandler}
      addPost={onClickHandler}
      posts={props.profilePage.postData}
      value={props.profilePage.postText}
    />
  );
};

export default MyPostsContainer;