import React from "react";
import "assets/stylesheets/home.scss";
import Card from "layout/components/card";
import Pies from "layout/components/pies";
import Timeline from "layout/components/timeline";
import ScrollAnimation from "react-animate-on-scroll";
import { InView } from "react-intersection-observer";
import "animate.css/animate.min.css";

function Home() {
  return (
    <div className="home">
      <header id="header">
        <div className="content">
          <img
            src="https://code.willstocks.co.uk/themes/zwiebl-zwiebl_stellar/assets/images/Will Stocks - Logo.png"
            className="logo"
            alt="Logo"
          />
          <p>Tech reviewer, IT professional & avid blogger.</p>
        </div>
        {/* Header Content */}
      </header>
      <section className="container sites">
        <ScrollAnimation animateIn="slideInLeft">
          <Card
            header="willstocks.co.uk"
            content="A technology review blog, geared towards consumer/prosumer products"
            extraStyles="gradient-box"
          />
        </ScrollAnimation>
        {/* slideInLeft */}
        <ScrollAnimation animateIn="slideInRight">
          <Card
            header="Web Dev Blog"
            content="A blog designated to documenting my learnings as I explore more of the world of web development"
            extraStyles="reverse-gradient-box"
          />
        </ScrollAnimation>
        {/* slideInRight */}
      </section>
      {/* sites container */}
      <section className="container noshadow timeline">
        <Timeline />
      </section>
      {/* timeline container */}
      <InView threshold="0.5">
        {({ inView, ref }) => (
          <div ref={ref}>
            <Pies inview={inView} />
          </div>
        )}
      </InView>
    </div>
  );
}

export default Home;
