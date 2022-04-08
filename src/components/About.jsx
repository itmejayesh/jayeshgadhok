import React from "react";
import "../components/about.css";
import ME from "../assets/me-about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function about() {
  Aos.init();
  return (
    <section id="about">
      <h5 data-aos="flip-left" data-aos-duration="1000">
        {" "}
        Get To Know
      </h5>
      <h2 data-aos="flip-left" data-aos-duration="1000">
        {" "}
        About Me
      </h2>

      <div className="about_container">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="aboute_me"
        >
          <img src={ME} alt="" />
        </div>

        <div className="about_content">
          <p
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            I’m working now on HTML, CSS and react-js and trying to improve the
            way that the website I’m working on shows above on the Internet.
            Other times I am sitting on my computer trying to fix bugs and to
            center a column, or make a button look pretty. There is a ton to do.
            I really love it and also feel passionate or intractive work and i
            am giving my best into it . I always try to give people use-friendly
            and easy to use or a good experience website . it is a very
            rewarding job.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
