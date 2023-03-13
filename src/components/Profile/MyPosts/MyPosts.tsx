import React, {ChangeEvent, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, ProfilePageStateType} from '../../../redux/state';

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

  let newPostText = React.createRef<HTMLTextAreaElement>();
  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   let newPostText = e.currentTarget.value;
  //   return text = newPostText;
  // };
  const onClickHandler = () => {
    if (newPostText.current) {
      props.dispatch(addPostAC(newPostText.current.value));
      newPostText.current.value = '';
    }

  };

  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <textarea ref={newPostText} placeholder={props.postData.postText}/>
        <button onClick={onClickHandler}>Add post
        </button>
      </div>
      {renderedPosts}
    </div>
  );
};

export default MyPosts;