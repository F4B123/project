import React from "react";
import "../Styles/Home.css"

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Login from "../Components/Login";

function LoginPage(){
    return(
      <div className="App">
        <Header>
        </Header>
        <p>
          Welcome to the login Page
        </p>
        <Login></Login>
        <Footer/>             
      </div>
    );
}

export default LoginPage;