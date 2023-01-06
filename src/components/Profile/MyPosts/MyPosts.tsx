import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostData} from '../../../index';

const MyPosts = (props: PostData) => {

  let renderedPost = props.postData.map(el => <Post key={el.id} message={el.message} likes={el.likes}/>);
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