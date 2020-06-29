import React from 'react';
import '../Style/post.css'
import Like from "./Like";
import Comments from "./Comments";

const Post = ({name, img , comments, nameComments , addLike,numberOfLike , nameCommentChange, CommentChange, addComment} ) => {

    // console.log({nameComments});
    const listOfComment = Object.keys( comments).map( id =>
        <Comments
            key={id}
          name = {nameComments[id]}
          comment = {comments[id]}
        />
    );


    return (
        <div className="post-container">
            <div className="post">
                <div className="header">
                    <h4>{name}</h4>
                    <Like like= {numberOfLike} />

                </div>
                <img src={img} alt="new"></img>

                <button className="like-btn" onClick={addLike}>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    Like
                </button>
                <div className="comments-container">
                    {listOfComment}
                </div>
            </div>

            <div className="add-comment">
                <input className="input-name" placeholder="Name" onChange={nameCommentChange} />
                <input className='input-comment' placeholder="Comment" onChange={CommentChange}/>
                <button className="send-btn" onClick={addComment}>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default Post;