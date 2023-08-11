import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import image1 from "../assets/aboutone.jpg"
import image2 from "../assets/abouttwo.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Front-End-Developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={image1} className="img" alt="Image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={image2} className="img" alt="Image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;