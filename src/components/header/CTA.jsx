import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="hvr btn">
        Download CV
      </a>
      <a href="#contact" className=" btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
