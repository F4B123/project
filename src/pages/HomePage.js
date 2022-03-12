import React, { Component } from "react";
import "../Styles/Home.css"

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PostList from "../Components/PostList";

class HomePage extends Component{

  render(){
    return (
        <div className="App" >
          <Header>
          </Header>
          <p>
            Welcome to the main page
          </p>
          <PostList/>
        </div>
    );
    }
}

export default HomePage;