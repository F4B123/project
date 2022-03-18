import React from "react";
import Post from "./Post";
import '../Styles/PostList.css'

function PostList(){
    return(
        <>
        <a href="/post" id="link">
            <div className="container-post" >
                <div className="first-post"> 
                    <Post address="0x06012c8cf97bead5deae237070f9587f8e7a266d"/>
                </div>
                <div className="first-post">
                    <Post address="0x79FCDEF22feeD20eDDacbB2587640e45491b757f"/> 
                </div>
                <div className="first-post"> 
                    <Post address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"/>
                </div>
            </div> 
        </a>     
        </>
    );
}

export default PostList;