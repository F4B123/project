import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component{
    clicked(){
        let text = document.getElementById("text")
        text.innerHTML = "wow not cool"
    }

    render(){
        return(
            <div className="main-footer" onClick={this.clicked}>
                <p id="text"></p>
            </div>
        );
    }
}

export default Footer;