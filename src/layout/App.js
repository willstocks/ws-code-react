import React from 'react';
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
                <div className="app">
                    <Navbar />
					<div className="view">
						<Switch>
							<Route exact path="/" basename={process.env.PUBLIC_URL} component={ Home }/>
							<Route path="/about" component={ About }/>
							<Route path="/contact" component={ Contact }/>
							<Route render={ () => <h1>404 Error</h1> } />
						</Switch>
					</div> {/* view */}
					<Footer />
                </div> {/* app */}
            </Router>
        );
    }
}

export default App;
