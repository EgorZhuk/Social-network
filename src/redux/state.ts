export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  addPost: (postMessage: string) => void
  subscribe: (observer: (state: StateType) => void) => void
  getState: () => StateType
}

let store: StoreType = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Yo! Howdy', likes: 1},
        {id: 2, message: 'My first post', likes: 13},
        {id: 2, message: 'My first post', likes: 13},
        {id: 2, message: 'My first post', likes: 13},
        {id: 2, message: 'My first post', likes: 13},
      ]
    },
    dialogPage: {
      messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
      ],
      dialogsData: [
        {
          id: 1,
          name: 'One',
          url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
        },
        {
          id: 2,
          name: 'Two',
          url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'
        },
        {
          id: 3,
          name: 'Three',
          url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg'
        },
        {
          id: 4,
          name: 'Four',
          url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg'
        },
        {
          id: 5,
          name: 'Five',
          url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        }
      ]
    },
    friendsPage: {
      friendsData:
        [
          {
            id: 1,
            name: 'One',
            url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
          },
          {
            id: 2,
            name: 'Two',
            url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'
          },
          {
            id: 3,
            name: 'Three',
            url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg'
          },
          {
            id: 4,
            name: 'Four',
            url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg'
          },
          {
            id: 5,
            name: 'Five',
            url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
          }
        ]
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost(postMessage: string) {
    let newPost: PostDataType = {id: 5, message: postMessage, likes: 0};

    this._state.profilePage.postData.push(newPost);
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  }
};



export type PostDataType = {
  id: number
  message: string
  likes: number
}

export type MessagesDataType = {
  id?: number
  message: string
}

export type DialogsDataType = {
  id?: number
  name: string
  url: string
}

export type FriendsDataType = {
  id?: number
  name: string
  url: string
}

type ProfilePageStateType = {
  postData: Array<PostDataType>,
}

type DialogsPageStateType = {
  messagesData: Array<MessagesDataType>
  dialogsData: Array<DialogsDataType>
}

type FriendsPageStateType = {
  friendsData: Array<FriendsDataType>,
}

export type StateType = {
  profilePage: ProfilePageStateType
  dialogPage: DialogsPageStateType
  friendsPage: FriendsPageStateType

}

// let state: StateType = {
//   profilePage: {
//     postData: [
//       {id: 1, message: 'Yo! Howdy', likes: 1},
//       {id: 2, message: 'My first post', likes: 13},
//       {id: 2, message: 'My first post', likes: 13},
//       {id: 2, message: 'My first post', likes: 13},
//       {id: 2, message: 'My first post', likes: 13},
//     ]
//   },
//   dialogPage: {
//     messagesData: [
//       {id: 1, message: 'Hello'},
//       {id: 2, message: 'How are you'},
//       {id: 3, message: 'Yo'},
//     ],
//     dialogsData: [
//       {
//         id: 1,
//         name: 'One',
//         url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
//       },
//       {
//         id: 2,
//         name: 'Two',
//         url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'
//       },
//       {
//         id: 3,
//         name: 'Three',
//         url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg'
//       },
//       {
//         id: 4,
//         name: 'Four',
//         url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg'
//       },
//       {
//         id: 5,
//         name: 'Five',
//         url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
//       }
//     ]
//   },
//   friendsPage: {
//     friendsData:
//       [
//         {
//           id: 1,
//           name: 'One',
//           url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
//         },
//         {
//           id: 2,
//           name: 'Two',
//           url: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'
//         },
//         {
//           id: 3,
//           name: 'Three',
//           url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg'
//         },
//         {
//           id: 4,
//           name: 'Four',
//           url: 'https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg'
//         },
//         {
//           id: 5,
//           name: 'Five',
//           url: 'https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
//         }
//       ]
//   }
// };

// export const addPost = (postMessage: string) => {
//   let newPost = {id: 5, message: postMessage, likes: 0};
//   state.profilePage.postData.push(newPost);
//   rerenderEntireTree(state);
// };

// export const subscribe = (observer: (state: StateType) => void) => {
//   rerenderEntireTree = observer;
// };

export default store;