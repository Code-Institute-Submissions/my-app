import "./FooterStyles.css";

import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>123 Charles Street</p>
                        <p>USA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                123-458-6247</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                imalsha@gmail.com</h4>
                </div>
            </div>
            
            <div className="right">     
                <h4>About the Company</h4>
                <p>I am Imalsha and I'm a Front End Developer & Founder of this Company. I have done various Frond End Projects for almost 20 years. I enjoy doing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer