import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/views/home';
import About from './components/views/about';
import Contact from './components/views/contact';
export default (
<div>
	<Route exact path="/" component={Home}/>
    //<Route exact path="/" component={About}/>
    //<Route exact path="/" component={Contact}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
</div>
);