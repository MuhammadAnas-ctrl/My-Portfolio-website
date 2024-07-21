import React, { useEffect, useState } from "react";
import "./certificates.scss";
import coursera from "../../Images/coursera.png";
import certificate from "../../Images/certificate.jpg";
import certificates from "./data";

const Certificates = () => {
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
    <div className="Certificates">
      <div className="container">
        <div className="top">
          <h1>Certifications</h1>
          <h2>Achieve, Share, Repeat! Mine Digital Accolades. 📜🎉</h2>
        </div>

        <div className="bottom">
          {certificates.map((item) => {
            return (
              <div className="certificatecontainer">
                <div className="certificateprovider">
                  <div className="left">
                    <img src={item.logo} alt="" />
                  </div>
                  <div className="right">
                    <h2>
                      {item.tagline}{" "}
                      <span className="reactjs">{item.span}</span>
                    </h2>
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="certificateimage">
                    <img src={item.certificate} />
                    <div className="overlay">
                      <span>
                        {touch ? "Tap to certify. 😌" : "Click to certify. 😌"}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
