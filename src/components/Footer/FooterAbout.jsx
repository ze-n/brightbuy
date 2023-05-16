import React from "react";
import { styled } from "styled-components";
import Title from "../Title";
import PlainBtn from "../PlainBtn";
const FooterAbout = () => {
  return (
    <Wrapper>
      <Title title="Bright Buy" />
      <p className="footer-about-long-text">
        Get the best deals over latest products from various top brands. All in
        one place from clothes to electronics to even food.{" "}
      </p>
      <div className="cta">
        <PlainBtn text="Shop now" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  .footer-about-long-text {
    line-height: 1.6rem;
  }

  /*  */
  /* layout */
  /*  */
  .footer-about-long-text {
    max-width: 30ch;
  }
  .cta {
    margin-top: 2rem;
  }
`;
export default FooterAbout;
