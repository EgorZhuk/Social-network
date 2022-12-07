import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt=""/>
        post 1
      </div>
      <span>Like</span>
    </div>
  );
};

export default Post;