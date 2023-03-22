import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionsTypes, StateType} from './redux/store';


type AppPropsType = {
//   store: StoreType
// }
  state: StateType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar friendsData={props.state.friendsPage.friendsData}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile
            postData={props.state.profilePage}
            dispatch={props.dispatch}
          />}/>
          <Route path="/dialogs" render={() => <Dialogs
            dialogData={props.state.dialogsPage}
            dispatch={props.dispatch}

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
