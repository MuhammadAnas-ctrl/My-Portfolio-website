import React from "react";
import "./herosection.scss";
import hand from "../../Images/hand.png";
import linkedin from "../../Images/linkedIn.png";
import github from "../../Images/github.png";
import upwork from "../../Images/upwork.png";
import zohaibpicture from "../../Images/zohaib's picture.png";
import { techstack } from "./data";

const Herosection = () => {
  return (
    <div className="hero">
      <div className="top">
        <div className="left">
          <div className="designation">
            <h1>
              Front-End React Developer
              <span>
                <img src={hand} alt="" />
              </span>
            </h1>
          </div>
          <div className="desc">
            <p>
              Hi, I'm <span className="name animate-charcter">Muhammad Anas</span>. A
              passionate Full Stack Developer based in Rahim Yar Khan, Pakistan.
              📍
            </p>
          </div>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/muhammad-zohaib-b94280190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="firstchild" />
            </a>

            <a
              href="https://github.com/MuhammadZohaib28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="lastchild" />
            </a>

            <a
              href="https://www.upwork.com/freelancers/muhammadzohaibs2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={upwork} alt="" className="firstchild upwork" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src={zohaibpicture} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>Tech Stack</span>
          <span className="borderright" />
        </div>
        <div className="right">
          {techstack.map((item) => {
            return (
              <div className="container rotate-scale-up" key={item.id}>
                <img src={item.name} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
