import React, {Component} from 'react';
import UpdatedComponent from '../UpdatedComponent/UpdatedComponent';

class HelloTest extends Component{
    render(){
        return (
            <h1>Hello World {this.props.name} </h1>
        )
    } 
} 

export default UpdatedComponent(HelloTest);