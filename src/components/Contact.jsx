import React from "react";
import "../components/contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  AOS.init();
  return (
    <section data-aos="flip-left" data-aos-duration="1000" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="zoom-in-right" className="contact_option">
            <AiOutlineMail className="icons" />
            <h4>Email</h4>
            <h5>jayeshgadhok@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwLsfMKTGffZHQhCSJJMNsBpKKkqqbzDztWXBSxCHxcfnkwXWHtdPLmWVlKFvgkwtfsq"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article data-aos="zoom-in-right" className="contact_option">
            <RiMessengerLine className="icons" />
            <h4>Messenger</h4>
            <h5>jayeshgadhok</h5>
            <a href="https://m.me/jayesh.gadhok" target="_blank">
              Send a message
            </a>
          </article>

          <article data-aos="zoom-in-right" className="contact_option">
            <BsWhatsapp className="icons" />
            <h4>Whatsapp</h4>
            <h5>+91 9871625387</h5>
            <a href="https://api.whatsapp.com/send?phone=+919871625387">
              Send a message
            </a>
          </article>
        </div>
        <form data-aos="zoom-in-left">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="name" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button typ="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
