import React from "react";
import "./section.css";
import Cards from "../Cards/cards";
import leftArrow from "../../Assets/icons/leftArrow.svg";
import rightArrow from "../../Assets/icons/rightArrow.svg";
import icon2 from "../../Assets/icons/Social Media.svg";
import icon1 from "../../Assets/icons/Search Engines-icon.svg";
import icon3 from "../../Assets/icons/Websites.svg";
import icon4 from "../../Assets/icons/Domains.svg";
import icon5 from "../../Assets/icons/Search Engines.svg";
import icon6 from "../../Assets/icons/Mobile-Apps.svg";
import icon7 from "../../Assets/icons/Video Platforms.svg";
import icon8 from "../../Assets/icons/Cyberlockers.svg";
import image1 from "../../Assets/icons/Mask group (1).svg";
import image2 from "../../Assets/icons/Mask group (2).svg";
import image3 from "../../Assets/icons/Mask group (3).svg";
import image4 from "../../Assets/icons/image 9.svg";
import image5 from "../../Assets/icons/image 10.svg";
import image6 from "../../Assets/icons/image 12.svg";

function SectionSix() {
  return (
    <div className="block-6">
      <div className="block6-container">
        <div className="block6-subheading">
          <p>
            <span>Platforms </span>We Serve
          </p>
        </div>
        <div className="card-section-six" style={{ marginTop: "3vh" }}>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon1} alt="icon1"></img>} // Example of using a Font Awesome icon
              content="Marketplaces"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon2} alt="icon2"></img>} // Example of using a Font Awesome icon
              content="Social Media"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon3} alt="icon3"></img>} // Example of using a Font Awesome icon
              content="Websites"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon4} alt="icon4"></img>} // Example of using a Font Awesome icon
              content="Domains"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon5} alt="icon5"></img>} // Example of using a Font Awesome icon
              content="Search Engines"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon6} alt="icon6"></img>}
              content="Mobile Apps"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon7} alt="icon7"></img>}
              content="Video Platforms"
            />
          </div>
          <div style={{ width: "160px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={icon8} alt="icon8"></img>}
              content="Cyberlockers"
            />
          </div>
        </div>
        <div className="section6-header" style={{ marginTop: "10vh" }}>
          <p>Testimonials</p>
        </div>
        <div
          className="section6-cards-row"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div style={{ width: "350px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={image1} alt="icon8"></img>}
              icon2={<img src={image6} alt="icon8"></img>}
              content="They have an exceptional understanding of Piracy & Cyber Investigations. They save costs in technical & legal operations"
              footer="Ajay Karakoti"
            />
          </div>
          <div style={{ width: "350px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={image2} alt="icon8"></img>}
              icon2={<img src={image5} alt="icon8"></img>}
              content="Bytescare offers solutions to detect and control the piracy of your content from fraudulent websites and content pirates. Bytescare solutions are like watchmen of Digital News Publishers and we highly recommend their services"
              footer="Sanjay Sindhwani"
            />
          </div>
          <div style={{ width: "350px", marginTop: "20px" }}>
            <Cards
              className="card-six"
              icon={<img src={image3} alt="icon8"></img>}
              icon2={<img src={image4} alt="icon8"></img>}
              content="“We have found the entire Bytescare team to be technically competent, enthusiastic, professional, easy to work with, and can clearly understand our business requirements and help us in the best possible manner.”"
              footer="Bhavook Khanna"
            />
          </div>
        </div>
        <div className="block2-arrows">
          <div className="left-arrow">
            <img src={leftArrow} alt="leftArrow"></img>
          </div>
          <div className="right-arrow">
            <img src={rightArrow} alt="rightArrow"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
