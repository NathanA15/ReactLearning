import React, { Component} from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <h1>Hello World {this.props.tech}!</h1>
        )
    }
}

export default HelloWorld;