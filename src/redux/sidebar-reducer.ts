type SideBarStateType = {
  sideBarData: Array<number>
}

let initialState: SideBarStateType = {
  sideBarData: [
    1,
    2
  ]
};

export const sidebarReducer = (state: SideBarStateType = initialState, action: any) => {
  return state;
};