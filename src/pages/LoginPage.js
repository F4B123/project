import React from "react";
import "../Styles/Home.css"
import Header from "../Components/Header";
import Login from "../Components/Login";

function LoginPage(){
    return(
      <div className="app-login">
        <Header>
        </Header>
        <h1 class="display-2" id="title">
          Welcome to the login Page
        </h1>
        <p>login with metamask</p>
        <Login></Login>             
      </div>
    );
}

export default LoginPage;