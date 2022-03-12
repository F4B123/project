import React from "react";
import Post from "./Post";
import '../Styles/PostList.css'

function PostList(){
    return(
        <>
        <a href="/post" >
            <div className="container" >
                <div className="first-post"> <Post></Post> </div>
            </div> 
        </a>     
        </>
    );
}

export default PostList;