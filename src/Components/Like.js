import React from 'react';
import '../Style/nav.css'

const Like = ({like}) => {
    let likes ="";
    if (like !== 0){
        likes = like
    }
    return (
        <div className='like-container '>
            <i className="fa fa-heart" aria-hidden="true"> {likes}</i>
            <div className='arrow-down'   ></div>
        </div>
    );
};

export default Like;