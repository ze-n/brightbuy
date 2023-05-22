import React from "react";
import { styled } from "styled-components";
import bicep from "../assets/icons/biccp.svg";

const HorizontalScroll = () => {
  return (
    <Wrapper className="text-medium">
      <div className="slide-tracker">
        <a href="#" className="slide">
          Shoes
        </a>
        <img src={bicep} alt="" className="slide icon" />
        <a href="#" className="slide">
          Accessories
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Food
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Electronics
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Clothes
        </a>
        <img src={bicep} alt="" className="slide icon" />
      </div>
      {/* .copy */}
      {/* one copy is required to create seemless animation */}

      <div className="slide-tracker">
        <a href="#" className="slide">
          Shoes
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Accessories
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Food
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Electronics
        </a>
        <img src={bicep} alt="" className="slide icon" />

        <a href="#" className="slide">
          Clothes
        </a>
        <img src={bicep} alt="" className="slide icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  background-color: var(--clr-green-400);

  /*  */
  /* typography */
  /*  */
  .slide {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  /*  */
  /* layout */
  /*  */
  /* setting up icon height */
  .icon {
    height: 1.5rem;
  }
  /* setting up height */
  /* this represents height of slide-tracker */
  --height: 5rem;
  .slide-tracker {
    height: var(--height);
  }
  /* this represents width of each slide */
  --slide-width: 15rem;
  /* Setting up width of wrapper */
  /* multiplied by 20 since there are 20 total slides */
  width: calc(var(--slide-width) * 20);

  /* aliging slide to center vertically */
  .slide-tracker {
    display: flex;
    align-items: center;
  }
  /* setting up width of slide */
  .slide {
    width: var(--slide-width);
  }
  /* centering content of slide horizontally */
  .slide {
    display: flex;
    justify-content: center;
  }

  /* bringing both slide-trackers next to each other */
  display: flex;

  /*  */
  /* animation */
  /*  */

  /* this variable stores duration of animation */
  --anim-duration: 29s;
  /* this variable represents width of slide in negative. used with translateX */
  --shift: -15rem;
  .slide-tracker {
    animation: scroll var(--anim-duration) linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      /* multiplied by 10 to cover one slide-tracker after that restart */
      /* second slide-tracker is there to just give seemless experience */
      transform: translateX(calc(var(--shift) * 10));
    }
  }
  /* pause animation when we hover the component */
  &:hover .slide-tracker {
    animation-play-state: paused;
  }
  @media screen and (max-width: 750px) {
    /*  */
    --slide-width: 10rem;
    --shift: -10rem;
    --anim-duration: 10s;
  }
`;
export default HorizontalScroll;
