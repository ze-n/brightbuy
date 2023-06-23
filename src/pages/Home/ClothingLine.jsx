import React from "react";
import { styled } from "styled-components";
import clothingmodel from "../../assets/clothingModel.png";
import ShadowBtn from "../../components/ShadowBtn";
import AutoScrollSeal from "../../components/AutoScrollSeal";
const ClothingLine = () => {
  return (
    <Wrapper>
      {/* <AutoScrollSeal
        text="Upto 50% off"
        top="10rem"
        rotate="2deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="18rem"
        rotate="-5deg"
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
        rotate="3.5deg"
        zIndex="4"
      />
      <AutoScrollSeal
        text="Upto 50% off"
        top="40rem"
        rotate="-1deg"
        zIndex="4"
      /> */}

      <div className="container flex-columns">
        <div className="text-container flex-column">
          <h2 className="title">Unlock Your Style Now Be Free</h2>
          <ShadowBtn text="Checkout Our Collection" to="/clothing" />
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
  background-color: var(--bg-home-clothing-line);
  .title {
    color: var(--clr-home-clothing-line-title);
  }

  /* typography */
  .title {
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
    max-width: 10ch;
  }

  @media screen and (max-width: 750px) {
    /* increasign padding top on mobile devices */
    --ptop: 4rem;
    /* reducting font size of title on smaller screens */
    --fs-title: 38px;
    --lh-title: 58px;
  }
`;

export default ClothingLine;
