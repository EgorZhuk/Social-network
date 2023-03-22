import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {PostDataType} from '../../../redux/store';
import Post from './Post/Post';

type PropsType = {
  // postData: ProfilePageStateType
  // dispatch: (action: ActionsTypes) => void
  updateNewPostText: (text: string) => void
  addPost: () => void
  posts: PostDataType[]
  value: string
}


const MyPosts = (props: PropsType) => {

  let renderedPosts = props.posts.map((el, index) => <Post
    key={index}
    id={el.id}
    message={el.message}
    likes={el.likes}/>);

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newPost = e.currentTarget.value;
    props.updateNewPostText(newPost);
    // props.dispatch(updatePostTextAC(newPost));
  };

  const onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostAC(props.postData.postText));
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