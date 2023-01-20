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
import {StateType} from './redux/state';


type PropsType = {
  state: StateType
  addPost: (post: string) => void
}

function App(props: PropsType) {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar friendsData={props.state.friendsPage.friendsData}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile
            postData={props.state.profilePage.postData}
            addPost={props.addPost}
          />}/>
          <Route path="/dialogs" render={() => <Dialogs
            state={props.state.dialogPage}

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
