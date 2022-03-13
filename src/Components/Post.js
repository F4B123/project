import React, { Component, useState } from "react";
import '../Styles/Post.css'


class Post extends Component{

    constructor (props){
        super()
        this.state = {images:'',name:props.name, description:''}
        this.api()
    }

    api() {
        let input = '0x06012c8cf97bead5deae237070f9587f8e7a266d';
        const options = {method: 'GET'};
        
        let info = fetch('https://api.opensea.io/api/v1/asset_contract/'+input, options)
          .then(response => response.json())
          .then(response =>  {
            console.log(response)
            //this.setState({name : response.name})
            this.setState({images : response.collection.banner_image_url})
            this.setState({description : response.description})
            })
            .catch(err => console.error(err))
        }
    
  
    static getHex(str){
        let void1 = '';
        for( let x = 0; x <str.length ;x++){
            void1 += str.charCodeAt(x).toString(16);
        }
        return void1
    }


    static getDerivedStateFromProps(props,state){ 
        if(state.name === 'no pasa'){
            return false;
        }
        state.name = "has changed";
        console.log(state.name);
        return true
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