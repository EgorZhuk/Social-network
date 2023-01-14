import ReactDOM from 'react-dom';
import App from './App';
import {addPost, StateType} from './redux/state';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const root = document.getElementById('root');
export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
    , root
  );
};