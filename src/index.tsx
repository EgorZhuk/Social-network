import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './redux/store';
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

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// const renderTree = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store}/>
//     </React.StrictMode>, document.getElementById('root')
//   );
// };
// renderTree();
// store.subscribe(renderTree);