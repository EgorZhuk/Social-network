import React from 'react';
import s from './ProfileInfo.module.css';
import {PropfilePropsType} from 'components/Profile/Profile';
import {Spin, Card} from 'antd';
import userImage from 'assets/images/user.png';


export const ProfileInfo = (props: Omit<PropfilePropsType, 'updateStatus'>) => {
  if (!props.profile) {
    return <Spin size={'large'} tip={'Loading'}/>;
  }
  return (
    <div className={s.profileContainer}>
      <div className={s.profileWrapper}>
        <div className={s.profileImage}>
          {props.profile.photos.large ? <img alt="example" src={props.profile.photos.large}/> :
            <img src={userImage} alt="userImg"/>}
        </div>
        <div className={s.profileInfo}>
          <p className={s.profileTitle}>Name: <span className={s.profileDescription}>{props.profile.fullName}</span></p>
          <p className={s.profileTitle}>Description: <span
            className={s.profileDescription}>{props.profile.lookingForAJobDescription}</span></p>
          <div className={s.profileContacts}>

          </div>
        </div>

      </div>

    </div>

  );
};
