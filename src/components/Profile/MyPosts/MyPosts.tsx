import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <input type="text" placeholder={'New post'}/>
        <button>Add post</button>
      </div>
      <Post message="Yo! Howdy" likes={1}/>
      <Post message="My first post" likes={13}/>
    </div>
  );
};

export default MyPosts;