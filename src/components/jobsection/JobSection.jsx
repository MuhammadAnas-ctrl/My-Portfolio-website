import React, { useEffect, useState } from "react";
import "./jobsection.scss";
import github from "../../Images/github.png";

import { projectdata } from "./data";
import live from "../../Images/live.png";


const JobSection = () =>{
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    updateTouchState(); // Initial check
    window.addEventListener("resize", updateTouchState);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateTouchState);
    };
  }, []);

  const updateTouchState = () => {
    if (window.innerWidth <= 456) {
      setTouch(true);
    } else {
      setTouch(false);
    }
  };
  return (
    <div className="projects">
      <div className="container">
        <div className="top">
          <h1>Professional Job Experience</h1>
          <h2>Each role a distinct milestone in professional growth 🚀</h2>
        </div>

        {projectdata.map((item) => {
          return (
            <div className="bottom" key={item.id}>
              <div
                className={
                  item.rowreverse == true
                    ? "containerb containerbrow"
                    : "containerb"
                }
              >
                <div className="leftbb">
                  <img
                    src={item.projectpicture}
                    alt="projectpicture"
                    loading="lazy"
                  />
                </div>
                <div className="rightb">
                  <div className="topr">
                    <h3>{item.projectname}</h3>
                  </div>

                  <div className="midb">
                    <p>{item.projectdesc}</p>
                    <div className="midbtn">
                      <span>{item.projectlanguage1}</span>
                      <span>{item.projectlanguage2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobSection;
    