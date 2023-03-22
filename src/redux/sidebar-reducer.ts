import {ActionsTypes, SideBarStateType} from './store';

let initialState: SideBarStateType = {
  sideBarData: [
    1,
    2
  ]
};

export const sidebarReducer = (state: SideBarStateType = initialState, action: ActionsTypes) => {
  return state;
};