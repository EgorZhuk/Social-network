import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionsTypes, StateType, StoreType} from './redux/store';


type AppPropsType = {
//   store: StoreType
// }
  store: StoreType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
  let state = props.store.getState();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar friendsData={state.friendsPage.friendsData}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile
            store={props.store}
          />}/>
          <Route path="/dialogs" render={() => <DialogsContainer
            store={props.store}

          />}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
          {/*<Route path="/friends" render={() => <Friends/>}/>*/}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
