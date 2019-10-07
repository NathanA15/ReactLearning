import React, {Component} from 'react';

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component{
        
        render() {
            return (
                <OriginalComponent 
                    name="nathan"
                    {...this.props}
                />
            )
        }
    }
    return NewComponent;
} 


export default UpdatedComponent;