import React from 'react';
import logo from '../../images/logo.svg';
import '../../stylesheets/App.css';

function Home() {
  return (
	<nav className="navigation">
		<ul>
			<a href='/'>Home</a>
			<a href='/about'>About</a>
			<a href='/contact'>Contact</a>
		</ul>
	</nav>
	
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home page
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
