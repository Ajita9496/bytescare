import React from "react";
import "./section.css";
import Cards from "../Cards/cards";
import icon1 from "../../Assets/icons/Market Intelligence.svg";
import icon3 from "../../Assets/icons/Reach out to Potential customers.svg";
import icon4 from "../../Assets/icons/Profitability.svg";
import icon2 from "../../Assets/icons/Improve your ROI.svg";
import icon5 from "../../Assets/icons/Improve your ROI.svg";

function sectionFive() {
  return (
    <div className="block-3">
      <div className="block3-container">
        <div className="block3-subheading">
          <p>
            <span>USPs</span> & <span>Client</span> Satisfaction
          </p>
        </div>
        <div className="cards-section">
          <div className="cards-row-1">
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon1} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Market Intelligence"
                content="It helps clients Gain valuable insights into the potential market by
                                removing copies and links to your original content. There is a provision for
                                tracking the entire workflow of the service."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon2} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Improve Your ROI"
                content="Our anti-piracy solutions are designed in a way to succor clients in
                                improving their ROI without affecting the revenue."
              />
            </div>
          </div>
          <div className="cards-row-2">
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon3} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Reach out to Potential Customers"
                content="We design products that help brands & companies to serve additional
                                products & services to their potential as well as existing customers
                                thereby increasing your revenue."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon4} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Profitability"
                content="Our efficient & cost-effective services reduce the cost associated with
                                technical & legal operations enhancing their sales & scaling customer
                                engagement."
              />
            </div>
            <div style={{ marginTop: "5vh" }}>
              <Cards
                icon={<img src={icon5} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Improve your Website Ranking"
                content="Combating the piracy damage to the content restricts the presence of
                                duplicate copies of the original content on the web henceforth improving
                                your website ranking for the search engines."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sectionFive;
