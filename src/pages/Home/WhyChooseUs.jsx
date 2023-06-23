import React from "react";
import { styled } from "styled-components";
import CurvedSection from "../../components/Sections/CurvedSection/CurvedSection";
import Feature from "../../components/Feature";
import comfort from "../../assets/icons/comfort.svg";
import click from "../../assets/icons/click.svg";
import delivery from "../../assets/icons/delivery.svg";
import secure from "../../assets/icons/secure.svg";
import returnPolicy from "../../assets/icons/returnPolicy.svg";
import greenHat from "../../assets/greenhat.png";
import ShadowBtn from "../../components/ShadowBtn";
const WhyChooseUs = () => {
  return (
    <Wrapper>
      <CurvedSection bgColor="var(--bg-home-why-us)">
        {/* this code will go inside CurvedSection */}
        <div className="why-section">
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="sub-text text-regular">
            "Never miss a great deal again! With our e-commerce platform, you'll
            always have access to the best offers and discounts."
          </p>
          <div className="flex-columns">
            {/* there will be three flex columns 2 for feature and 1 for image */}
            <div className="flex-column">
              <div>
                {/* feature class will be used to give margin-bottom */}
                <div className="feature">
                  <Feature img={comfort}>
                    {/* just add .bold class to text you want bold */}
                    <span className="bold"> Free shipping</span> over purchase
                    of $999.
                    <span className="bold">Save money</span> and buy at the
                    <span className="bold">comfort of your home.</span>
                  </Feature>
                </div>
                <div className="feature no-margin-mobile">
                  <Feature img={click}>
                    So much <span className="bold">variety</span> to choose
                    from. All
                    <span className="bold"> top brands in same place.</span>
                  </Feature>
                </div>
              </div>
            </div>
            <div className="flex-column">
              <img src={greenHat} alt="" className="green-hat" />
            </div>
            <div className="flex-column">
              <div>
                {/* feature class will be used to give margin-bottom  */}
                <div className="feature">
                  <Feature img={secure}>
                    {/* just add .bold class to text you wan tbold */}
                    <span className="bold">Fast and secure checkout </span>
                    proecess. No need to wait for minutes for transaction to
                    complete.
                  </Feature>
                </div>
                <div className="feature">
                  <Feature img={returnPolicy}>
                    <span className="bold">Amazing return policy</span> allows
                    you to
                    <span className="bold">
                      easily return or exchange products
                    </span>
                    within 7 days if not satisfied.
                  </Feature>
                </div>
              </div>
            </div>
          </div>
          {/* giving more margin-bottom because want more space between button and this */}
          <div className="feature" style={{ marginBottom: "6rem" }}>
            <Feature img={delivery}>
              <span className="bold">Fast delivery</span>, you are guranteed to
              get your orders{" "}
              <span className="bold">within 2 working days.</span>
            </Feature>
          </div>

          <ShadowBtn text="Shop Best Sellers" to="/bestsellers" />
        </div>
      </CurvedSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  color: var(--clr-home-why-us);

  /*  */
  /* typography */
  /*  */

  /* aliging sub text and sub-heading center */
  .sub-text,
  .section-heading {
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */
  /* centering everything inside content horizontally */
  .why-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* setting up max-width on sub-text */
  .sub-text {
    max-width: 55ch;
  }
  /* aliging elements inside flex-columns horizontally */
  .flex-columns {
    align-items: center;
  }
  /* margins */
  .section-heading {
    margin-bottom: 1rem;
  }
  .sub-text {
    margin-bottom: 6rem;
  }
  /* giving some margin bottom to feature */
  .feature {
    margin-bottom: 3rem;
  }
  /* last feature has more margin. this is specified inline above */
  /* increasing size of green-hat little bit */
  .green-hat {
    transform: scale(1.2);
  }
`;
export default WhyChooseUs;
