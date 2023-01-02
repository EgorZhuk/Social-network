import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
  id?: number
  name?: string
  message?: string
}

const DialogItem = (props: PropsType) => {
  let path: string = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: PropsType) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
};

let dialogsData: Array<PropsType> = [
  {id: 1, name: 'One'},
  {id: 2, name: 'Two'},
  {id: 3, name: 'Three'},
  {id: 4, name: 'Four'},
  {id: 5, name: 'Five'}
];

let messagesData: Array<PropsType> = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'Yo'},
];

export const Dialogs = (props: PropsType) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {
          dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
        }

        {/*<DialogItem name={'One'} id={1}/>*/}
        {/*<DialogItem name={'Two'} id={2}/>*/}
        {/*<DialogItem name={'Three'} id={3}/>*/}
        {/*<DialogItem name={'Four'} id={4}/>*/}
        {/*<DialogItem name={'Five'} id={5}/>*/}

      </div>
      <div className={classes.messages}>
        {
          messagesData.map(el => <Message message={el.message}/>)
        }
        {/*<Message message="Hello"/>*/}
        {/*<Message message="How are you"/>*/}
        {/*<Message message="Yo"/>*/}
      </div>
    </div>
  );
};