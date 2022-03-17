import '../Styles/Login.css'
import React,{useEffect, useState} from 'react';


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
        return(
            <>
                <p>{Address}</p>
                <button>Log out</button>
            </>
        )    
    }

    return(
        <div className='container'>
            <div className='login-card'>
                <div className='sign-in-container'>
                    <button onClick={toogleButton} id="button">{ready}</button>
                </div>
            </div>     
        </div>
        
    );
}

export default Login;