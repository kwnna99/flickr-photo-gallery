import React from 'react';
import  {NavLink} from 'react-router-dom';


//main nav menu

const Nav = (props) => {
    return(
    <nav className="main-nav">
        <ul>
        <li><NavLink exact to="/cats">Cats</NavLink></li>
        <li><NavLink to="/dogs">Dogs</NavLink></li>
        <li><NavLink to="/computers">Computers</NavLink></li>
        </ul>    
    </nav>
);}

export default Nav;