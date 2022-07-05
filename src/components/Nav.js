import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

export default function Nav(){
    return(
        <nav className='navbar'>
            <FontAwesomeIcon icon={faEarth} className='nav--logo'/>
            <span className='nav--text'>Mon journal de voyage</span>
        </nav>
    )
}