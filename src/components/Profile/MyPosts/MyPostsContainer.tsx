import React from 'react';
import {
  addPostAC,
  PostDataType,
} from 'redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootState} from 'redux/redux-store';



type MapStateToPropsType = {
  posts: PostDataType[]
}
type MapDispatchToProps = {
  addPost: (newText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    posts: state.profilePage.postData,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addPost: (newText: string) => dispatch(addPostAC(newText)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;