import React from "react";
import { styled } from "styled-components";
import heroImg from "../../../assets/hero-img.png";
import PlainBtn from "../../PlainBtn";
import SpecialRating from "../../SpecialRating";
import blob from "../../../assets/blob.svg";
import blobs from "../../../assets/blobs.svg";
const Hero = () => {
  return (
    <Wrapper>
      <div className="container flex-columns">
        <div className="text-column flex-column">
          <div className="rating">
            <SpecialRating />
          </div>
          <h1 className="title">
            Discover the Best Selection of Products for Your Lifestyle
          </h1>
          <h2 className="sub-title">
            We offers a broad range of products to meet your needs.
          </h2>
          <div className="cta-btn">
            <PlainBtn text="Shop Best Sellers" />
          </div>
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
  background-color: var(--clr-blue-400);
  /*  */
  /* typography */
  /*  */
  .title {
    font-size: var(--fs-title);
    line-height: var(--lh-title);
  }
  .sub-title {
    font-size: var(--fs-subtitle);
    line-height: var(--lh-subtitle);
  }
  /*  */
  /* layout */
  /*  */
  /* setting up basic height width */
  min-width: 100vw;
  .sub-title {
    max-width: 25ch;
  }
  /* centering text vertically */
  .text-column {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
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
  .sub-title {
    margin-bottom: 2rem;
  }
  /* reducing size of image-column little bit because it looks better */
  .image-column {
    max-width: 45%;
  }

  /* increasing size of cta-btn and fixing it's position */
  .cta-btn {
    transform: scale(1.1) translateX(5%);
  }
  /* aliging decoration images */
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

  @media screen and (max-width: 750px) {
    /* setting up padding */
    --pinline: 2rem;
    /* fixing size of image column in mobile devices */
    .image-column {
      max-width: 100%;
    }
    /* centering everything inside text column horizontally */
    .text-column {
      align-items: center;
      text-align: center;
    }
    /* fixing position of button */
    .cta-btn {
      transform: scale(1.1);
    }
    /* centering flex columns horizontally */
    .flex-columns {
      align-items: center;
    }
    /* aligning decoration images */
    .blobs {
      top: -5%;
    }
  }
`;
export default Hero;
