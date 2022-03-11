import React from "react";
import { Avatar } from "@mui/material";
import Hubble from "./hubble.jpg";
import "./Header.css";


//maybe make the logo the link to the page?

function Header(){
    return(
        <>
            <header className="main-header" >
                <div>
                    <Avatar alt="hubble" src={Hubble} />
                </div>
                <a href = "/" className="web-name">
                    <div className="web-name1">        
                    </div>
                </a>

                <nav className="main-nav">
                    <ul>
                        <li><a href = "/" onClick={() => {window.alert('Register not available')}}>Profile</a></li>
                    </ul>
                </nav>
            </header>       
        </>
    );
}
    
export default Header;