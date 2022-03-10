import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component{
    render(){
        return(
            <div className="main-footer" onClick={()=>{ window.alert("wow, not cool")}}>
                <p>Do not click here</p>
            </div>
        );
    }
}

export default Footer;