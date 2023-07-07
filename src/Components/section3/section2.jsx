import React from "react";
import "./section.css";
import Cards from "../Cards/cards";
import icon1 from "../../Assets/icons/Market Intelligence.svg";
import icon3 from "../../Assets/icons/Reach out to Potential customers.svg";
import icon4 from "../../Assets/icons/Profitability.svg";
import icon2 from "../../Assets/icons/Improve your ROI.svg";
import icon5 from "../../Assets/icons/Improve your ROI.svg";

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
            <div>
              <Cards
                icon={<img src={icon1} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Market Intelligence"
                content="It helps clients Gain valuable insights into the potential market by
                                removing copies and links to your original content. There is a provision for
                                tracking the entire workflow of the service."
              />
            </div>
            <div>
              <Cards
                icon={<img src={icon2} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Improve Your ROI"
                content="Our anti-piracy solutions are designed in a way to succor clients in
                                improving their ROI without affecting the revenue."
              />
            </div>
          </div>
          <div className="cards-row-2">
            <div>
              <Cards
                icon={<img src={icon3} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Reach out to Potential Customers"
                content="We design products that help brands & companies to serve additional
                                products & services to their potential as well as existing customers
                                thereby increasing your revenue."
              />
            </div>
            <div>
              <Cards
                icon={<img src={icon4} alt="ellipse1"></img>} // Example of using a Font Awesome icon
                heading="Profitability"
                content="Our efficient & cost-effective services reduce the cost associated with
                                technical & legal operations enhancing their sales & scaling customer
                                engagement."
              />
            </div>
            <div>
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

export default SectionThree;
