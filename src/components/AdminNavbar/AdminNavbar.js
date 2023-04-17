import React from 'react';
import {AdminMenuItems} from "./AdminMenuItems";
import './AdminNavbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function AdminNavbar(){
    //State that checks if the menu bar is clicked or not
    const [clicked,setClicked] = useState(false)
    
    // When the menu bar is clicked, the boolean state reverses itself
    function handleClick(){
        setClicked(!clicked);
    }

    return(
        <nav className = "adminnavbarItems">
            <h1 className ="navbar-logo">HomeConnect <i class="fas fa-home"></i> </h1> 
            <div className = "adminmenu-icon" onClick = {handleClick} >
             {/* When we click on the icon, we set the icon to be the x icon, and if
             it is not clicked, it will give us the menu bar icon   */}
             <i className = {clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            {/* Now we need add the state in the className since on mobile the nav links will shift to the left */}
            <ul className = {clicked ? "nav-menu active": "nav-menu"} >
                {/* Mapping the data in the MenuItems array into each li tag */}
                {AdminMenuItems.map((item,index) => {
                    return(
                        <li key= {index} ><Link to = {item.url} className = {item.cName}>{item.title}</Link></li>
                    )
                })}

                
            </ul>
            <Link  to = "/homeconnect/logout">
            <button className = "nav-button btn btn--primary ">Log Out</button>
            </Link>
          
        </nav>
    )
}

export default AdminNavbar;
