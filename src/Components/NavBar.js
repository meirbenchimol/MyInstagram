import React from 'react';
import '../Style/nav.css'
import Like from "./Like";

const NavBar = ({like}) => {

    return (
        <div className='nav-bar'>
            <h2>My Instagram  </h2>
            <Like like={like}/>
        </div>
    );
};

export default NavBar;