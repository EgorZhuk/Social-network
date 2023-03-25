import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts = (props: MyPostsPropsType) => {

  let renderedPosts = props.posts.map((el, index) => <Post
    key={index}
    id={el.id}
    message={el.message}
    likes={el.likes}/>);

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newPost = e.currentTarget.value;
    props.updateNewPostText(newPost);
  };

  const onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <textarea
          onChange={onPostChange}
          value={props.value}
          placeholder={'Enter post text'}/>
        <button onClick={onAddPost}>Add post
        </button>
      </div>
      {renderedPosts}
    </div>
  );
};

export default MyPosts;