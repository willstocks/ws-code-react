import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'layout/components/navbar';
import Home from 'layout/views/home';
import About from 'layout/views/about';
import Contact from 'layout/views/contact';
import Footer from 'layout/components/footer';


class App extends React.Component {
    render() {
        return (
			<div className="app">
				<Router>
					<Navbar />
					<div className="view">
						<Switch>
							<Route exact path="/" component={ Home }/>
							<Route path="/about" component={ About }/>
							<Route path="/contact" component={ Contact }/>
						</Switch>
					</div> {/* view */}           
					<Footer />
				</Router>
			</div>
        );
    }
}

export default App;
