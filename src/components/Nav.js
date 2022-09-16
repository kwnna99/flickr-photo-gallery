import React from 'react';
import  {NavLink} from 'react-router-dom';



const Nav = (props) => {
    const search=props.forLinks;

    const handleClick = (e) =>{
        search(e.target.getAttribute('query'));
    }

    return(
    <nav className="main-nav">
        <ul>
        <li><NavLink exact to="/cats" onClick={handleClick} query="cats">Cats</NavLink></li>
        <li><NavLink to="/dogs" onClick={handleClick} query="dogs">Dogs</NavLink></li>
        <li><NavLink to="/computers" onClick={handleClick} query="computers">Computers</NavLink></li>
        </ul>    
    </nav>
);}

export default Nav;