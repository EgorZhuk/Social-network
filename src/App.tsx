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
  // postData: Array<PostDataType>
  // dialogsData: Array<DialogsDataType>
  // messagesData: Array<MessagesDataType>
  state: StateType
}

function App(props: PropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData}/>}/>
          <Route path="/dialogs" render={() => <Dialogs
            messagesData={props.state.dialogPage.messagesData}
            dialogsData={props.state.dialogPage.dialogsData}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
