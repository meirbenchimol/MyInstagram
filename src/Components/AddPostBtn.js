import React from 'react';
import '../Style/general.css'


const AddPostBtn = ({toogleModal}) => {
    return (
        <div className="add-post-btn" onClick={toogleModal}>
            +
        </div>
    );
};

export default AddPostBtn;