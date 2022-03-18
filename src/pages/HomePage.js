import React, { Component } from "react";
import "../Styles/Home.css"

import Header from "../Components/Header";
import PostList from "../Components/PostList";

class HomePage extends Component{

  render(){
    return (
        <div className="App" >
          <Header>
          </Header>
          <PostList/>
        </div>
    );
    }
}

export default HomePage;