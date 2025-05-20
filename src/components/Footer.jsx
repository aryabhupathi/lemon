import React from "react";
import Lemon from "../images/lemonlogo.png";
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src={Lemon} alt="Little Lemon Logo" className="footer-logo" />
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Site Map</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/reservations">Reservation</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>
            123 Olive Street
            <br />
            Chicago, IL 60601
          </p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ info@littlelemon.com</p>
        </div>
        <div className="footer-section social">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://github.com ">
              <FaGithubSquare />
            </a>
            <a href="https://instagram.com ">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com ">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com ">
              <FaTwitter />
            </a>
            <a href="https://youtube.com ">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
