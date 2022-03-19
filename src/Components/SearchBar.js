import React from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/AppBar.css'

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "rgba(240, 248, 255, 0.287)"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }));
  


  //thanks to https://stackoverflow.com/a/35342982/18385293
  const checkInput = () =>{
    debugger
    if(document.getElementById('search') !== null){
      var query = document.getElementById('search').value;
      window.find(query);
      return true;
    }
    return false;
  }

  //thanks to https://stackoverflow.com/a/35707795
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      checkInput();
    }
  }

  function SearchBar(){
    return(
        <Search>
          <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          <input type="text" id="search" onKeyPress={handleKeyPress} placeholder="press enter to search"/>
        </Search>
    );
  }

  export default SearchBar;