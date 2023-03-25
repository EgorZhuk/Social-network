import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {friendsReducer} from './friends-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  friendsPage: friendsReducer
});



let store = createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>

export default store;