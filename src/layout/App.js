import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'assets/images/logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from 'layout/views/home';
import About from 'layout/views/about';
import Contact from 'layout/views/contact';
import Footer from './components/footer';


class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
					<div className="views">
						<Switch>
							<Route exact path="/" component={ Home }/>
							<Route path="/about" component={ About }/>
							<Route path="/contact" component={ Contact }/>
							<Route render={ () => <h1>404 Error</h1> } />
						</Switch>
					</div>
                </div>
            </Router>
        );
    }
}

export default App;
