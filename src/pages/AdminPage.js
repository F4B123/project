import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import "../Styles/Home.css"

function AdminPage(){

    const to= "https://rinkeby.etherscan.io/address/" + window.userAddress;
    return(
        <>
            <div className='app-login'>
                <Header/>
                <div className='admin-body'>
                    <h1 class="display-2"> Welcome to your Profile</h1>
                    <p>Your wallet Address is {window.userAddress}</p>
                    <h1 class="display-5">
                        <a id="link" target="_blank" rel="noopener noreferrer" href={to}>View Account on Etherscan </a>
                    </h1>
                    
                    <Link to="/Login">
                        <button>Log out</button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}

export default AdminPage;