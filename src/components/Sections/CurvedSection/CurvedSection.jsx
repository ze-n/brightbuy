import React from "react";
import { styled } from "styled-components";

//bgColor is the background color of curved section
const CurvedSection = ({ children, bgColor }) => {
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <div className="curve" style={{ backgroundColor: bgColor }}></div>
      <div className="container content">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  /* background color of Wrapper and curve is set inline  */

  /*  */
  /* layout */
  /*  */

  /* padding settings */

  padding-inline: var(--pinline);
  padding-block: 4rem;
  /* position relative will be used to setup curve and show content on top of curve */
  position: relative;
  /* curve settings */
  .curve {
    /* setting up size */
    width: 100vw;
    height: 20rem;
    /* positioning curve */
    position: absolute;
    left: 0;
    top: -3rem;
    /* turning div into curve like shave */
    clip-path: ellipse(60% 29% at 50% 29%);
  }
  .content {
    /* positioning content on top  */
    position: relative;
    z-index: 1;
    /* pushing content towards top to reduce weird too much white space */
    top: -2rem;
  }
`;

export default CurvedSection;
