import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="hvr btn">
        Download Resume
      </a>
      <a href="#contact" className=" btn">
        Let's Talk
      </a>
      <a href="https://warsame.gatsbyjs.io" className="hvr btn">
        Blog
      </a>

    </div>
  );
};

export default CTA;
