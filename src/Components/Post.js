import React, { Component, useState } from "react";
import '../Styles/Post.css'


class Post extends Component{

    constructor (props){
        super()
        this.state = {images:'',name:'', description:'',address:props.address}
        this.api()
    }

    api() {
        let input = this.state.address;
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
                    <div className="name" >
                        <h1 class="display-3">{name}</h1>
                    </div>
                    <img src={images} width="800px" className="img"/>
                    <div className="name" >
                        <p class="lead">{description}</p>
                        
                    </div>
                </div>
                
            </>
        );
    }
      
}

export default Post