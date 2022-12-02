import React from 'react';

const Stars = (props: any) => {

    if (props.selected === true){
        return <span><b>star </b></span>
    } else
    return (

            <span>star </span>

    );
};

export default Stars;