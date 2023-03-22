import React, {ChangeEvent, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, ProfilePageStateType} from '../../../redux/store';
import {addPostAC, updatePostTextAC} from '../../../redux/profile-reducer';

type PropsType = {
  postData: ProfilePageStateType
  dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: PropsType) => {

  let renderedPosts = props.postData.postData.map((el, index) => <Post
    key={index}
    id={el.id}
    message={el.message}
    likes={el.likes}/>);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newPost = e.currentTarget.value;
    props.dispatch(updatePostTextAC(newPost));
  };

  const onClickHandler = () => {
    props.dispatch(addPostAC(props.postData.postText));
  };

  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <textarea onChange={onChangeHandler} value={props.postData.postText} placeholder={'Enter post text'}/>
        <button onClick={onClickHandler}>Add post
        </button>
      </div>
      {renderedPosts}
    </div>
  );
};

export default MyPosts;