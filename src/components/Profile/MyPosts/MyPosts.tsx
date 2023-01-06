import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataType} from '../../../redux/state';

type PropsType = {
  postData: Array<PostDataType>
}

const MyPosts = (props: PropsType) => {

  let renderedPost = props.postData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>);
  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <input type="text" placeholder={'New post'}/>
        <button>Add post</button>
      </div>
      {renderedPost}
    </div>
  );
};

export default MyPosts;