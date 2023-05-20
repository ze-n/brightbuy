import React from "react";
import { styled } from "styled-components";
import clothingmodel from "../../assets/clothingModel.png";
import ShadowBtn from "../../components/ShadowBtn";
import AutoScrollSeal from "../../components/AutoScrollSeal";
const ClothingLine = () => {
  return (
    <Wrapper>
      <AutoScrollSeal
        text="Upto 50% off"
        top="10rem"
        rotate="2deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="18rem"
        rotate="-6deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="24rem"
        rotate="4deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="33rem"
        rotate="3deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="40rem"
        rotate="-2deg"
        zIndex="4"
      />

      <div className="container flex-columns">
        <div className="text-container flex-column">
          <h2 className="title">Unlock Your Style Now</h2>
          <ShadowBtn text="Checkout Our Collection" />
        </div>
        <div className="image-container flex-column">
          <img src={clothingmodel} alt="" className="clothing-model" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--clr-green-450);
  .title {
    color: var(--clr-blue-200);
  }

  /* typography */
  .title {
    font-size: 70px;
    line-height: 90px;
    font-weight: 900;
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */
  /* this will be used by component AutoScrollSeal */
  position: relative;
  /* padding */
  padding-inline: var(--pinline);
  --ptop: 2rem;
  /* --pbottom is used by text-container */
  --pbottom: 2rem;
  padding-top: var(--ptop);
  .text-container {
    padding-bottom: var(--pbottom);
  }
  /* centering flex-columns children vertically */
  .flex-columns {
    align-items: center;
  }
  /* center aligning flex-column childs horizontally */

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* margins */
  /* adding some margin between title and button */
  .title {
    margin-bottom: 2rem;
  }

  /* giving title some width because it looks bad */
  .title {
    max-width: 6ch;
  }

  @media screen and (max-width: 750px) {
    /* increasign padding top on mobile devices */
    --ptop: 4rem;
  }
`;

export default ClothingLine;