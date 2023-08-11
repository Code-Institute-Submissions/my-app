import "./WorkCardStyles.css";

import React from 'react';
import pro1 from "../assets/Projectonebacke.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
    return (
        <div className="project-card">
            <img src={pro1} alt="Image"/>
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
                <p>This is a recent project what I have done. This is a top Backery in the USA. They wanted to sell their products online and wanted to increase their business more. With this website they managed to increase their anual business rate with 100% compare to previous years.</p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;