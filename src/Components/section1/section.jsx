import React from "react";
import "./section.css";
import icon from "../../Assets/icons/Heroimage.svg";
import groupIcon from "../../Assets/icons/Group-icons.svg";

function SectionOne() {
  return (
    <div>
      <div className="block1">
        <div className="main-heading" style={{ marginTop: "5vh" }}>
          <p>
            Let’s Fight <span>Piracy</span> Together with our Anti Piracy
            Protection Services!
          </p>
        </div>
        <div className="main-container">
          <img src={icon} alt="icon" />
          <div className="main-container-content">
            <p className="content">
              The advancement towards technology & world wide web has shown an
              exponential increase in attracting a large number of population to
              the digital platforms of health, education, entertainment, and
              many more.
              <br />
              <br />
              Content digitization increases the risk of infringements. There
              are a number of services & solutions available all over the globe
              to protect your content from Copyright infringement which makes it
              a difficult task to choose among the best available services.
              <br />
              <br />
              <span>“Voila! BytesCare at Your Doorstep.”</span>
              <br />
              <br />
              BytesCare, a content piracy solutions company stands at your
              doorstep to protect your content from infringements, pre/post
              piracy damage, and also protect & maintain your brand’s
              reputation.
            </p>
          </div>
        </div>
        <div className="clients-icons-section">
          <div className="clients-icon-header">
            <p>Trusted by 100+ Clients</p>
          </div>

          <div>
            <img
              src={groupIcon}
              alt="group-icon"
              style={{ width: "90vw" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
