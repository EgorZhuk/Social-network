import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {AddItemFormType, AddItemReduxForm} from 'components/AddItemForm/AddItemForm';

const MyPosts = (props: MyPostsPropsType) => {

  let renderedPosts = props.posts.map((el, index) => <Post
    key={index}
    id={el.id}
    message={el.message}
    likes={el.likes}/>);

  const onAddPost = (values: AddItemFormType) => {
    props.addPost(values.newText);
  };

  return (
    <div className={classes.contentWrapper}>
      <h3>My posts</h3>
      <div className={classes.addPost}>
        <AddItemReduxForm children={'post'} onSubmit={onAddPost}/>
      </div>

      {renderedPosts}
    </div>
  );
};

export default MyPosts;