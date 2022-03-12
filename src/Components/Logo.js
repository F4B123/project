import * as React from 'react';
import Hubble from '../images/hubble.jpg';
import { Avatar } from "@mui/material";


function Logo(){
    return(
        <a href="/">
            <Avatar src={Hubble}/> 
        </a> 
    );
}

export default Logo;