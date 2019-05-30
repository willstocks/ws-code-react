import React from "react";
import "assets/stylesheets/timeline.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Media from "react-media";

function Timeline() {
  return (
    <div className="timeline">
      <Media query={{ maxWidth: 600 }}>
        {matches =>
          matches ? (
            <ScrollAnimation animateIn="slideInRight" animateOnce>
              <div className="date left">
                <div className="content">
                  <h2>2019</h2>
                  <p>Lorem ipsum..</p>
                </div>
              </div>
            </ScrollAnimation>
          ) : (
            <ScrollAnimation animateIn="slideInLeft" animateOnce>
              <div className="date left">
                <div className="content">
                  <h2>2019</h2>
                  <p>Lorem ipsum..</p>
                </div>
              </div>
            </ScrollAnimation>
          )
        }
      </Media>

      <ScrollAnimation animateIn="slideInRight" animateOnce>
        <div className="date right">
          <div className="content">
            <h2>2018</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </ScrollAnimation>

      <Media query={{ maxWidth: 600 }}>
        {matches =>
          matches ? (
            <ScrollAnimation animateIn="slideInRight" animateOnce>
              <div className="date left">
                <div className="content">
                  <h2>2017</h2>
                  <p>Lorem ipsum..</p>
                </div>
              </div>
            </ScrollAnimation>
          ) : (
            <ScrollAnimation animateIn="slideInLeft" animateOnce>
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
    </div>
  );
}

export default Timeline;
