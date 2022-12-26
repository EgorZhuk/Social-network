import React from 'react';
import classes from './Dialogs.module.css';

type PropsType = {}

export const Dialogs = (props: PropsType) => {
  return (

    <div className={classes.contentContainer}>
      <div className="dialogs">
        <div className="dialogsItems">
          <div className="dialog">One</div>
          <div className="dialog">Two</div>
          <div className="dialog">Three</div>
          <div className="dialog">Four</div>
          <div className="dialog">Five</div>
        </div>
        <div className="messages">
          <div className="message">Hello</div>
          <div className="message">How are you</div>
          <div className="message">Yo</div>
        </div>
      </div>
    </div>


  );
};