import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img className={classes.contentImage}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt=""/>
      </div>
      <div className={classes.contentContainer}>
        <div>
          ava+descr
        </div>
        <div>
          My Posts
          <div>
            New post
          </div>
          <div className={classes.posts}>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;