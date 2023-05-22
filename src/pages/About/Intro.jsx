import React from "react";
import { styled } from "styled-components";
import LeftTextScroll from "../../components/LeftTextScroll";
import RightTextScroll from "../../components/RightTextScroll";
const Intro = () => {
  return (
    <Wrapper>
      <LeftTextScroll
        text="Story Behind Our Business"
        top="0rem"
        opacity=".05"
        slideWidth="180rem"
        shift="-180rem"
      />
      <RightTextScroll
        text="Story Behind Our Business"
        bottom="0rem"
        opacity=".05"
        slideWidth="180rem"
        shift="-180rem"
      />

      <div className="container">
        <h2 className="title-lg">Elevating Your Shopping Experience</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-about-intro);
  color: var(--clr-about-intro);

  /*  */
  /* typography */
  /*  */

  .title-lg {
    font-weight: 900;
  }
  /* aliging text center */
  .title-lg {
    text-align: center;
  }

  /*  */
  /* layout */
  /*  */
  position: relative;
  /* will be used by TextScroll */
  /* padding */
  padding-inline: var(--pinline);
  /* giving width so title appears on mulitple lines */
  .title-lg {
    max-width: 19ch;
  }
  /* setting up container height */
  .container {
    min-height: 700px;
    height: calc(100vh - var(--mh-header));
    height: calc(100dvh - var(--mh-header));
  }
  /* positioning title center */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* keeping text always in front */
  .title-lg {
    position: relative;
    z-index: 2;
  }
`;

export default Intro;
