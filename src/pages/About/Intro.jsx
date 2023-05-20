import React from "react";
import { styled } from "styled-components";
import { LeftTextScroll } from "../../components/LeftTextScroll";
import { RightTextScroll } from "../../components/RightTextScroll";
const Intro = () => {
  return (
    <Wrapper>
      <LeftTextScroll
        text="Story Behind Our Business"
        top="0rem"
        opacity=".06"
      />
      <RightTextScroll
        text="Story Behind Our Business"
        bottom="0rem"
        opacity=".06"
      />

      <div className="container">
        <h2 className="title">Elevating Your Shopping Experience</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--clr-black);
  color: var(--clr-white);

  /*  */
  /* typography */
  /*  */

  .title {
    font-size: var(--fs-title);
    font-weight: 900;
    line-height: var(--lh-title);
  }
  /* aliging text center */
  .title {
    text-align: center;
  }

  /*  */
  /* layout */
  /*  */
  position: relative;
  /* will be used by TextScroll */

  /* giving width so title appears on mulitple lines */
  .title {
    max-width: 19ch;
  }
  /* setting up container height */
  .container {
    min-height: 700px;
  }
  /* positioning title center */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* keeping text always in front */
  .title {
    position: relative;
    z-index: 2;
  }
`;

export default Intro;
