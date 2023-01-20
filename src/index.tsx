import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './redux/state';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = (state: StateType) => {

  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
      />
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);