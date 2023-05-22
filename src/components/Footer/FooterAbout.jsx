import React from "react";
import { styled } from "styled-components";
import ArrowTitle from "../ArrowTitle";
import PlainBtn from "../PlainBtn";
const FooterAbout = () => {
  return (
    <Wrapper>
      <ArrowTitle title="Bright Buy" />
      <p className="footer-about-long-text text-regular">
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
