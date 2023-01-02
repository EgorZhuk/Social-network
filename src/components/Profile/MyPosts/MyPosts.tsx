import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

type PostDataType = {
  id: number
  message: string
  likes: number
}
let postData: Array<PostDataType> = [
  {id: 1, message: 'Yo! Howdy', likes: 1},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
];

const MyPosts = () => {
  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <input type="text" placeholder={'New post'}/>
        <button>Add post</button>
      </div>
      {
        postData.map(el => <Post message={el.message} likes={el.likes}/>)
      }
    </div>
  );
};

export default MyPosts;