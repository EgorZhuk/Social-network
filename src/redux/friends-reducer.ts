import {ActionsTypes, FriendsPageStateType} from './store';

let initialState: FriendsPageStateType = {
  friendsData: [
    {
      id: 1,
      name: 'One',
      url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
    },
    {
      id: 2,
      name: 'Two',
      url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
    },
    {
      id: 3,
      name: 'Three',
      url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg',
    },
    {
      id: 4,
      name: 'Four',
      url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg',
    },
    {
      id: 5,
      name: 'Five',
      url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg',
    },
  ],
};

export const friendsReducer = (state: FriendsPageStateType = initialState, action: ActionsTypes) => {
  return state;
};