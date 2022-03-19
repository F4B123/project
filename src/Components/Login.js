import '../Styles/Login.css'
import React,{useEffect, useState} from 'react';
import Logo from '../images/download.png'
import { Link }from 'react-router-dom';


function Login(){

    const Web3 = require('web3');
    let [ready, setReady]= useState('Metamask is not installed');
    let [Address, setAddress] = useState(null);

    window.userAddress = null;
    
    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            setReady('Login')
            start()
          }
    })

    useEffect(() => {
        ShowInfo()
    },[Address])

    //Initialize web3 connected to ETH
    const start = async() =>{
        if(window.ethereum){
            window.web3 = new Web3(window.ethereum);
            try{
                await window.ethereum.enable();
            } catch{
                console.error("error");
            }
        }
        

        //load in Localstorage
        window.userAddress = window.localStorage.getItem('userAddress');

    }

    function toogleButton(){
        if (ready === 'Login'){
            loginWithEth();
        }
    }

    async function loginWithEth(){
        if(window.web3){
            try{
                const accounts = await window.web3.eth.getAccounts();
                window.localStorage.setItem('userAddress', accounts[0]);
                setAddress(window.userAddress);
            } catch{
                console.error("error")
            }
        }
        
    }

    function ShowInfo(){
        if(typeof window.ethereum !== 'undefined'){
            return(
                <>
                    <button onClick={toogleButton} id="button-1">{ready}</button>
                </>
            )  
        }
        else{
            return(
                <button onClick={toogleButton} id="button-1" disabled>{ready}</button>
            )
        }
          
    }

    return(
        <div className='container-component'>
            <div className='login-card'>
                <div className='sign-in-container'>
                    <img src={Logo}  class="img-circle" width="100"/>
                    <p>Login with metamask</p>
                    <Link to="/Admin" >
                        <ShowInfo/>
                    </Link>
                    
                </div>
            </div>     
        </div>
        
    );
}

export default Login;