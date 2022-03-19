import React from "react";
import Post from "./Post";
import '../Styles/PostList.css'

function PostList(){
    return(
        <>
        <div className="container-post" >
            <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/cryptokitties" id="link">
                <div className="post"> 
                    <Post address="0x06012c8cf97bead5deae237070f9587f8e7a266d"/>
                </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/mfers" id="link">
                <div className="post">
                    <Post address="0x79FCDEF22feeD20eDDacbB2587640e45491b757f"/> 
                </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/cryptopunks" id="link">
                <div className="post"> 
                    <Post address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"/>
                </div>
            </a>
            
        </div> 
            
        </>
    );
}

export default PostList;