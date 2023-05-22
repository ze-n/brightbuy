import React from "react";
import { styled } from "styled-components";
import FeatureCard2 from "../../components/FeatureCard2";
import icon1 from "../../assets/icons/transparency.svg";
import icon2 from "../../assets/icons/delivery-truck.svg";
import icon3 from "../../assets/icons/handshake.svg";
import icon4 from "../../assets/icons/development.svg";
import RightTextScroll from "../../components/RightTextScroll";

const CompanyValues = () => {
  return (
    <Wrapper>
      <RightTextScroll
        text="Our Values"
        slideWidth="130rem"
        shift="-130rem"
        top="10rem"
        opacity=".05"
        fontSize="300px"
      />
      <div className="container">
        <h2 className="section-heading-lg">Our Company Values</h2>
        <div className="company-values-container">
          <div className="flex-columns">
            <div className="flex-column">
              <FeatureCard2
                icon={icon1}
                title="Transparency"
                text="Openness with our team and clients. We raise issues and provide solutions promptly."
              />
            </div>
            <div className="flex-column">
              <FeatureCard2
                icon={icon2}
                title="Over Delivery"
                text="Deliver more value than over team and clients expect. Every day over every delivery."
              />
            </div>
          </div>
          <div className="flex-columns">
            <div className="flex-column">
              <FeatureCard2
                icon={icon3}
                title="Commitment"
                text="Our word and hard work over everything else. Our clients and vision are our guiding beacons. "
              />
            </div>
            <div className="flex-column">
              <FeatureCard2
                icon={icon4}
                title="Self Improvement"
                text="Never stop learning, never stop evolving into who we want to be and where we want to be."
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-about-company-values);
  color: var(--clr-about-company-values);
  /*  */
  /* typography */
  /*  */
  .section-heading {
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */
  position: relative;

  /* padding */
  padding-inline: var(--pinline);
  padding-block: 10rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }
  --gap: 6rem;
  .company-values-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  .flex-columns {
    gap: var(--gap);
  }
  .container {
    position: relative;
    z-index: 2;
  }
`;

export default CompanyValues;
