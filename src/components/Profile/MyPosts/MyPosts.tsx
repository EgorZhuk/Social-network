import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div>
        <input type="text" placeholder={'New post'}/>
        <button>Add post</button>
      </div>
      <Post/>
      <Post/>
    </div>
  );
};

export default MyPosts;