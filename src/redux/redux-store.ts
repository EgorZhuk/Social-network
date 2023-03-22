import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {friendsReducer} from './friends-reducer';
import {StoreType} from './store';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  friendsPage: friendsReducer
});



let store: StoreType = createStore(reducers);

export type RootState = ReturnType<typeof reducers>

export default store;