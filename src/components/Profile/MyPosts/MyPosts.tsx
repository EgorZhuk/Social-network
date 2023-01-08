import React, {ChangeEvent, RefObject, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from '../../../redux/state';

type PropsType = {
  postData: Array<PostDataType>
  addPost: (post: string) => void
}

const MyPosts = (props: PropsType) => {

  let renderedPosts = props.postData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>);

  let [newPost, setNewPost] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.currentTarget.value);
  };

  const onClickHandler = () => {
    props.addPost(newPost);
    setNewPost('');
  };

  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <input onChange={onChangeHandler} type="text" placeholder={'New post'}/>
        <button onClick={onClickHandler}>Add post
        </button>
      </div>
      {renderedPosts}
    </div>
  );
};

export default MyPosts;