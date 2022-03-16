import * as React from 'react';
import Hubble from '../images/hubble.jpg';
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';


function Logo(){
    return(
        <Link to="/">
            <Avatar src={Hubble}/> 
        </Link> 
    );
}

export default Logo;