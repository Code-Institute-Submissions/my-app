import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/introimg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="Intro Image"/>
        </div>
        <div className="content">
            <p>HI, I'M a FREELANCER.</p>
            <h1>Front End Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg