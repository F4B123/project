import '../Styles/Login.css'
import React,{useEffect, useState} from 'react';



function Login(){
    var Web3 = require('web3');
    let [ready, setReady]= useState('Metamask is not installed');
    

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            setReady('Login')
            start()
          }
    })

    const start = async() =>{
        if(window.ethereum){
            window.web3 = new Web3(ethereum);
            try{
                await ethereum.enable();
            } catch{
                console.error("error");
            }
        }

        const userAddress = window.localStorage.getItem('userAddress');
    }

    function toogleButton(){
        if (ready === 'Login'){
            loginWithEth();
        }
    }

    async function loginWithEth(){
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        //     .catch((e) => {
        //         window.alert("login process stop")
        //     })
        if(window.web3){
            try{
                const accounts = await web3.eth.getAccounts();
                window.localStorage.setItem('userAddress', accounts[0]);
            } catch{
                console.error("error")
            }
        }
        
    }

    return(
        <div className='container'>
            <div className='login-card'>
                <div className='sign-in-container'>
                    <button onClick={toogleButton}>{ready}</button>
                </div>
            </div>     
        </div>
        
    );
}

export default Login;