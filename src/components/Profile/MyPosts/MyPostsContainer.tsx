import React from 'react';
import {
  addPostAC,
  PostDataType,
  updatePostTextAC
} from 'redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootState} from 'redux/redux-store';



type MapStateToPropsType = {
  posts: PostDataType[]
  value: string
}
type MapDispatchToProps = {
  addPost: () => void
  updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    posts: state.profilePage.postData,
    value: state.profilePage.postText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: () => dispatch(addPostAC()),
    updateNewPostText: (newPost: string) => dispatch(updatePostTextAC(newPost))
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;