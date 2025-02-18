import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

// ReactDOM.render(<App />, document.getElementById('root'));

const render = () => ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
store.subscribe(render);


render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
