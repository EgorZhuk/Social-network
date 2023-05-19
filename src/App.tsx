import React, {FC} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {News} from 'components/News/News';
import {Music} from 'components/Music/Music';
import {Settings} from 'components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import Login from 'components/Login/Login';
import FriendsContainer from 'components/Friends/FriendsContainer';
import {connect, Provider} from 'react-redux';
import store, {AppRootState} from 'redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from 'redux/app-reducer';
import {Spin} from 'antd';

class App extends React.Component<AppContainerPropsType, AppRootState> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <Spin size={'large'} tip={'Loading'}/>);
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/friends" render={() => <FriendsContainer/>}/>

        </div>
      </div>
    );
  }
}

type MapStateToProps = {
  initialized: boolean
}
type MapDispatchToProps = {
  initializeApp: () => void
}
const mapStateToProps = (state: AppRootState): MapStateToProps => ({
  initialized: state.app.initialized
});
type AppContainerPropsType = MapStateToProps & MapDispatchToProps

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp: FC = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>;
};

export default SocialNetworkApp;
