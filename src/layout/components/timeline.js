import React from 'react';
//import { NavLink } from 'react-router-dom';
//import logo from 'assets/images/logo.svg';
//import '../../stylesheets/App.css';
import 'assets/stylesheets/timeline.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Media from 'react-media';


function Timeline() {
  return (
	<div className="timeline">
	
		<Media query={{ maxWidth: 600 }}>
          {matches =>
            matches ? (
				<ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
				<div className="date left">
					<div className="content">
						<h2>2017</h2>
						<p>Lorem ipsum..</p>
					</div>
				</div>
				</ScrollAnimation>
            ) : (
				<ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft">
				<div className="date left">
					<div className="content">
						<h2>2017</h2>
						<p>Lorem ipsum..</p>
					</div>
				</div>
				</ScrollAnimation>
            )
          }
        </Media>
	
		<ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
		<div className="date right">
			<div className="content">
				<h2>2016</h2>
				<p>Lorem ipsum..</p>
			</div>
		</div>
		</ScrollAnimation>

	</div>
  );
}

export default Timeline;
