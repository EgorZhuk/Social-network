import React from 'react';
import classes from './BgImage.module.css';


export const BgImage = () => {
  return (
    <div>
      <img className={classes.contentImage}
           src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
           alt=""/>
    </div>
  );
};
