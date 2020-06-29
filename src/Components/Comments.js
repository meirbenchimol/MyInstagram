import React from 'react';
import '../Style/comment.css'

const Comments = ({name,comment}) => {
    return (
        <div className="comment-unit">
            <p className="name-comment" >@{name}</p>
            <p className="comment">{comment}</p>
        </div>
    );
};

export default Comments;