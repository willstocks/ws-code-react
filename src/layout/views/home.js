import React from 'react';
import 'assets/stylesheets/home.scss';
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
			</div>
		</header>
		<section className="container sites">
		
			<ScrollAnimation animateIn="slideInLeft">
				<div className="card gradient-box">
					<h2>willstocks.co.uk</h2>
					<p className="content">A technology review blog, geared towards consumer/prosumer products</p>
				</div> {/* card */}
			</ScrollAnimation> {/* slideInLeft */}
			
			<ScrollAnimation animateIn="slideInRight">
				<div className="card reverse-gradient-box">
					<h2>code.willstocks.co.uk</h2>
					<p className="content">A blog designated to documenting my learnings as I explore more of the world of web development</p>
				</div> {/* card */}
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
			</div>
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
			</div>
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
			</div>
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
			</div>
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
			</div>
		</section>  {/* charts container */}

    </div>
  );
}

export default Home;
