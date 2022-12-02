import React from 'react';
import Stars from "./Stars";

const Rating = () => {
    return (
        <div>
            <Stars selected={true}/>
            <Stars selected={true}/>
            <Stars selected={false}/>
            <Stars selected={true}/>
            <Stars selected={false}/>
        </div>
    );
};

export default Rating;