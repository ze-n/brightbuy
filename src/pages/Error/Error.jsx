import React from "react";
import { styled } from "styled-components";
import errorhero from "../../assets/errorhero.png";
import LeftTextScroll from "../../components/LeftTextScroll";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Error = () => {
  return (
    <Wrapper>
      <LeftTextScroll
        text="Error"
        fontSize="360px"
        slideWidth="130rem"
        shift="-130rem"
        opacity=".05"
      />
      <div className="container flex-columns">
        <div className="flex-column error-hero-container">
          <img src={errorhero} alt="" className="error-hero" />
        </div>
        <div className="flex-column text-container">
          <p className="error-number">404</p>
          <p className="subtitle">This Page is Not on the Map</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-error-page);
  color: var(--clr-error-page);

  /*  */
  /* typography */
  /*  */
  .text-container {
    /* setting text-alignment to center */
    text-align: center;
  }
  --fs-error-number: 8rem;
  .error-number {
    font-size: var(--fs-error-number);
    line-height: var(--fs-error-number);
  }
  /*  */
  /* layout */
  /*  */
  /* bringing container on top of LeftTextScroll */
  .container {
    position: relative;
    z-index: 2;
  }
  /* padding */
  --pblock: 3rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);

  .flex-columns {
    /* aligning items to center horizontally  and vertically*/
    align-items: center;
    justify-content: center;
  }
  .error-hero {
    /* setting max-width on image */
    max-height: 30rem;
  }

  .text-container {
    /* bringing text to top */
    order: -1;
  }
  @media screen and (max-width: 900px) {
    /* reducing font size of error number for smaller screens */
    --fs-error-number: 5rem;
  }
`;

export default Error;
