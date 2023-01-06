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
}
type ProfilePageStateType = {
  postData: Array<PostDataType>,
}

type DialogsPageStateType = {
  messagesData: Array<MessagesDataType>
  dialogsData: Array<DialogsDataType>
}

export type StateType = {
  profilePage: ProfilePageStateType
  dialogPage: DialogsPageStateType
}

let state: StateType = {
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
      {id: 1, name: 'One'},
      {id: 2, name: 'Two'},
      {id: 3, name: 'Three'},
      {id: 4, name: 'Four'},
      {id: 5, name: 'Five'}
    ]
  }

};

export default state;