import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type PostDataType = {
  id: number
  message: string
  likes: number
}
export type PostData = {
  postData: Array<PostDataType>
}

let postData: PostDataType[] = [
  {id: 1, message: 'Yo! Howdy', likes: 1},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
  {id: 2, message: 'My first post', likes: 13},
];

ReactDOM.render(
  <App postData={postData}/>,
  document.getElementById('root')
);