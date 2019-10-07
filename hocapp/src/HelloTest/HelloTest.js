import React, {Component} from 'react';
import UpdatedComponent from '../UpdatedComponent/UpdatedComponent';

class HelloTest extends Component{
    render(){
        return (
            <div>
                <h1>Hello World {this.props.name} </h1>
                <p>{this.props.test2}</p>
            </div>
        )
    } 
} 

export default UpdatedComponent(HelloTest);