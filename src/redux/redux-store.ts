import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {friendsReducer} from './friends-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from 'redux/auth-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
});



let store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;
export default store;