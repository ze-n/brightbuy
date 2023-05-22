import React from "react";
import { styled } from "styled-components";
import ShadowBtn from "../../ShadowBtn";
import SpecialRating from "../../SpecialRating";
import blob from "../../../assets/blob.svg";
import blobs from "../../../assets/blobs.svg";
const Hero = ({ title, subTitle, btnText, heroImg }) => {
  return (
    <Wrapper>
      <div className="container flex-columns">
        <div className="text-column flex-column">
          <div className="text-container">
            <div className="rating">
              <SpecialRating />
            </div>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subTitle}</h2>
            <ShadowBtn text={btnText} />
          </div>
          <img src={blob} alt="" className="blob" />
        </div>
        <div className="image-column flex-column">
          <img src={heroImg} alt="" className="hero-img" />
          <img src={blobs} alt="" className="blobs" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-home-hero);
  color: var(--clr-home-hero);
  /*  */
  /* typography */
  /*  */

  /*  */
  /* layout */
  /*  */
  /* setting up basic height width */
  min-width: 100vw;
  /* this is given because only one word is left on second line otherwise which looks bad */
  .subtitle {
    max-width: 25ch;
  }

  /* centering flex-columns vertically */
  /*  */
  .flex-columns {
    align-items: center;
  }
  /* setting up padding */
  padding-inline: var(--pinline);
  padding-block: 5rem;

  /* margins */
  .rating {
    margin-bottom: 0.5rem;
  }
  .title {
    margin-bottom: 1rem;
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  /* reducing size of image-column little bit because it looks better */
  .image-column {
    max-width: 45%;
  }

  /* aliging decoration images */

  /* blobs stuff */
  /* setting up image-column to be relative */
  .image-column {
    position: relative;
  }
  /* positioning blobs */
  .blobs {
    position: absolute;
    right: -10%;
    top: -15%;
  }
  /* setting up hero-img to appear at top */
  .hero-img {
    position: relative;
    z-index: 1;
  }

  /* blob stuff */
  /* setting up text-column to be relative */
  .text-column {
    position: relative;
  }
  /* positioning blob */
  .blob {
    position: absolute;
    top: 10%;
    left: -50%;
  }
  /* setting up text-container to appear at top */
  .text-container {
    position: relative;
    z-index: 1;
  }
  @media screen and (max-width: 750px) {
    /* setting up padding */
    --pinline: 2rem;
    /* fixing size of image column in mobile devices */
    /* because it was 45% on big screens */
    .image-column {
      max-width: 100%;
    }
    /* centering everything inside text column along y-axis */
    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    /* aligning decoration images */
    /* blobs stuff */
    .blobs {
      top: -5%;
    }
  }
`;
export default Hero;
