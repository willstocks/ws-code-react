import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/views/home';
import About from './components/views/about';
import Contact from './components/views/contact';
import './stylesheets/index.css';
//import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

ReactDOM.render((
  <BrowserRouter>
    <div>
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
