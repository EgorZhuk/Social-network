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
      <Post message="Yo! Howdy" likes={1}/>
      <Post message="My first post" likes={13}/>
    </div>
  );
};

export default MyPosts;