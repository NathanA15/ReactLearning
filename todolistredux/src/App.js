import React, { Component} from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import { store } from './store';
import ButtonGroup from './ButtonGroup';

class App extends Component {
  render() {        
    return(
      <div className='App'>
        <HelloWorld tech={store.getState().tech} />   
        <ButtonGroup technologies={['React', 'Elm', 'React-Redux']} />     
      </div>
    )
  }
}

export default App;
