import React from 'react';
import '../Style/modal.css'

const AddPostModal = ({show, nameChange , legendChange , imgChange , send}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={show} >&times;</span>
                <h3>Add Post</h3>
                <form className='form-add-post'>
                    <label  >Name: </label>
                    <input className='input-post' onChange={nameChange} id='name' type="text"  required/>
                    <label >Image Url: </label>
                    <input className='input-post' onChange={imgChange} id='url' type="text" required/>
                    <label >Legend: </label>
                    <input className='input-post'  onChange={legendChange} name='legend' type="text" />
                    <input className='send' value='Send' onClick={send} type='submit'/>
                </form>

            </div>

        </div>
    );
};

export default AddPostModal;