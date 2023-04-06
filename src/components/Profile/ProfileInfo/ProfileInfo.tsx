import React from 'react';
import classes from './ProfileInfo.module.css';
import {PropfilePropsType} from 'components/Profile/Profile';
import {Spin, Card} from 'antd';

export const ProfileInfo = (props: PropfilePropsType) => {
  if (!props.profile) {
    return <Spin size={'large'} tip={'Loading'}/>;
  }
  return (
    <div className={classes.profileWrapper}>

      <Card
        hoverable
        style={{width: 240}}
        cover={props.profile.photos.large ? <img alt="example" src={props.profile.photos.large}/> :
          <Spin size={'large'} tip={'Loading'}/>}>
        <h3>{`Name: ${props.profile.fullName}`} </h3>
      </Card>
      {/*{*/}
      {/*  props.profile.photos.small ? <img src={props.profile.photos.small} alt=""/> :*/}
      {/*    <Spin size={'large'} tip={'Loading'}/>*/}
      {/*}*/}

    </div>
  );
};
