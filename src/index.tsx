import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './redux/state';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {

  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);