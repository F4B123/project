import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component{

    state = {
        follow_rules:'yes'
    }

    clicked(){
        let text = document.getElementById("text")
        text.innerHTML = "wow, not cool"
        this.setState({
            follow_rules:'no'
        })
    }

    getDate(){
        const date1 = new Date()
        return(date1.getDate())
    }


    render(){
        return(
            <>
                <div className="main-footer" onClick={() => this.clicked()}>
                    <p id="text"></p>
                </div>
                <br/>
                <div className="second-footer">do you follow rules: {this.state.follow_rules}</div>
                <p>{this.getDate()}</p>
                
            </>     
        );
    }
}

export default Footer;