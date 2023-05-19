import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {friendsReducer} from './friends-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from 'redux/auth-reducer';
import {reducer as formReducer} from 'redux-form';

import thunk from 'redux-thunk';
import {appReducer} from 'redux/app-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});



let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
// @ts-ignore
window.store = store;
export default store;