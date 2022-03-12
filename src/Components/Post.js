import React, { Component, useState } from "react";
import '../Styles/Post.css'


class Post extends Component{

    constructor (){
        super()
        this.state = {images:'',name:'', description:''}
        this.api()
    }

    api() {
        let input = '0x06012c8cf97bead5deae237070f9587f8e7a266d';
        const options = {method: 'GET'};
        
        let info = fetch('https://api.opensea.io/api/v1/asset_contract/'+input, options)
          .then(response => response.json())
          .then(response =>  {
            console.log(response)
            this.setState({name : response.name})
            this.setState({images : response.collection.banner_image_url})
            this.setState({description : response.description})
            })
            .catch(err => console.error(err))
        }
        
    render(){
        const {images,name,description} = this.state

        return(
            <>
                <div className="main">
                    <div className="name" >{name}</div>
                    <img src={images} width="800px" className="img"/>
                    <div className="name" >{description}</div>
                </div>
                
            </>
        );
    }
      
}

export default Post