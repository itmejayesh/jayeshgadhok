import React from "react";
import "../components/experiance.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Experiance() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section data-aos="flip-left" data-aos-duration="1000" id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        className="skill-container"
      >
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css ">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>JAVASCRIPT</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>REACT-JS</span>
            </div>
            <div className="progress-line react-js">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
