import React from 'react';
import 'assets/stylesheets/home.scss';
import Card from 'layout/components/card';
import PieChart from 'react-minimal-pie-chart';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Timeline from 'layout/components/timeline';

function Home() {
  return (
    <div className="home">
		<header id="header">
			<div className="content">
				<img src="https://code.willstocks.co.uk/themes/zwiebl-zwiebl_stellar/assets/images/Will Stocks - Logo.png" className="logo" alt="Logo" />
				<p>Tech reviewer, IT professional & avid blogger.</p>
			</div> {/* Header Content */}
		</header>
		<section className="container sites">
			<ScrollAnimation animateIn="slideInLeft">
				<Card 
					header="willstocks.co.uk"
					content="A technology review blog, geared towards consumer/prosumer products"
					extraStyles="gradient-box"
				/>
			</ScrollAnimation> {/* slideInLeft */}
			<ScrollAnimation animateIn="slideInRight">
				<Card 
					header="Web Dev Blog"
					content="A blog designated to documenting my learnings as I explore more of the world of web development"
					extraStyles="reverse-gradient-box"
				/>
			</ScrollAnimation> {/* slideInRight */}
		</section> {/* sites container */}
		
		<Timeline />
		
		<section className="container charts">
			<h2>Skillset</h2>
			<div className="chart tea">
				<PieChart
					data={[{
							value: 100,
							color: '#E38627'
					}]}
					totalValue={100}
					lineWidth={20}
					label
					labelStyle={{
						fontSize: '25px',
						fontFamily: 'sans-serif'
					}}
					labelPosition={0}
					rounded
					animate
				/>
				<h3>Tea Drinking</h3>
			</div> {/* Tea Chart */ }
			<div className="chart html">
				<PieChart
					data={[{
							value: 80,
							color: '#E38627'
					}]}
					totalValue={100}
					lineWidth={20}
					label
					labelStyle={{
						fontSize: '25px',
						fontFamily: 'sans-serif'
					}}
					labelPosition={0}
					rounded
					animate
				/>
				<h3>HTML</h3>
			</div> {/* HTML Chart */ }
			<div className="chart css">
				<PieChart
					data={[{
							value: 80,
							color: '#E38627'
					}]}
					totalValue={100}
					lineWidth={20}
					label
					labelStyle={{
						fontSize: '25px',
						fontFamily: 'sans-serif'
					}}
					labelPosition={0}
					rounded
					animate
				/>
				<h3>CSS</h3>
			</div> {/* CSS Chart */ }
			<div className="chart js">
				<PieChart
					data={[{
							value: 75,
							color: '#E38627'
					}]}
					totalValue={100}
					lineWidth={20}
					label
					labelStyle={{
						fontSize: '25px',
						fontFamily: 'sans-serif'
					}}
					labelPosition={0}
					rounded
					animate
				/>
				<h3>Javascript</h3>
			</div> {/* JS Chart */ }
			<div className="chart php">
				<PieChart
					data={[{
							value: 65,
							color: '#E38627'
					}]}
					totalValue={100}
					lineWidth={20}
					label
					labelStyle={{
						fontSize: '25px',
						fontFamily: 'sans-serif'
					}}
					labelPosition={0}
					rounded
					animate
				/>
				<h3>PHP</h3>
			</div> {/* PHP Chart */ }
		</section>  {/* charts container */}

    </div>
  );
}

export default Home;
