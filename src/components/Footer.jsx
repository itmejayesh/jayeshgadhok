import React from "react";
import "../components/footer.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer_socials">
        <a href="https://www.facebook.com/jayesh.gadhok/" target="_blank">
          <BsFacebook className="icons" />
        </a>
        <a href="https://www.instagram.com/itsme.jayesh_/" target="_blank">
          <BsInstagram className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/jayesh-gadhok-138462152/"
          target="_blank"
        >
          <BsLinkedin className="icons" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
