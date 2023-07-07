import React from "react";
import "./section.css";
import Cards from "../Cards/cards";
import icon1 from "../../Assets/icons/card-icon1.svg";
import icon3 from "../../Assets/icons/Scalable.svg";
import icon4 from "../../Assets/icons/Transparent.svg";
import icon2 from "../../Assets/icons/icon-2.svg";
import icon5 from "../../Assets/icons/Enforcement.svg";

function SectionThree() {
  return (
    <div className="block-3">
      <div className="block3-container">
        <div className="block3-header">
          <p>Why BYTESCARE?</p>
        </div>
        <div className="block3-subheading">
          <p>
            {" "}
            The right choice to increase your <span>contents security.</span>
          </p>
        </div>
        <div className="block3-content">
          <p>
            Bytescare provides a variety of fast, economical, robust, accurate,
            scalable, and transparent AI/ML empowered solutions that assist our
            customers in protecting their content from any copyright
            infringement and also from any pre/post piracy damages. Our smart
            solutions differentiate us from the other competitors in the Market.
            <br />
            <br />
            We anticipate our customers to easily protect their content and
            brands from any damage and thefts with our user-friendly, reliable,
            and 24*7 available products and services including Pre-Piracy
            Solutions, Post-Piracy Solutions, and Brand & Reputation Management
            tools.
          </p>
        </div>
        <div className="cards-section">
          <div className="cards-row-1">
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon1} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Fast & Economical"
                content="Our automated crawlers and deep learning solutions are quicker and cheaper."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon2} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Robust & Accurate"
                content="Verify infringements to ensure they are not from your official channel partners."
              />
            </div>
          </div>
          <div className="cards-row-2">
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon3} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Scalable"
                content="Regardless of the type, length or number of your content, our technology is designed to handle it."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon4} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Transparent"
                content="Our automated crawlers and deep learning solutions are quicker and cheaper."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon5} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Enforcement & Investigation"
                content="Our automated crawlers and deep learning solutions are quicker and cheaper."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
