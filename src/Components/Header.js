import React from "react";
import "./Header.css";

function Header(){
    return(
        <>
            <header class= "main-header" >
                <a href = "/" class="web-name">
                    <div class="web-name1">
                        Home
                    </div>
                </a>
                <nav class="main-nav">
                    <ul>
                        <li><a href = "/">Log in</a></li>
                        <li><a href = "/">Register</a></li>
                    </ul>
                </nav>
            </header>       
        </>
    );
}
    
export default Header;