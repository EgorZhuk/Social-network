import './index.css';
import store, {AppRootState} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

export const rerenderEntireTree = (state: AppRootState) => {

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>


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