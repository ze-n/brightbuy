import React from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
const SpecialRating = () => {
  return (
    <Wrapper>
      <div className="stars">
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
      </div>
      <p>50,000+</p>
      <p>5 Star Reviews</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  background-color: var(--clr-white);
  .icon {
    color: var(--clr-orange-400);
  }
  /*  */
  /* typography */
  /*  */

  font-size: var(--fs-regular);
  font-weight: 600;
  /*  */
  /* layout */
  /*  */
  /* centering things */
  display: flex;
  justify-content: center;
  align-items: center;
  /* adding some space between things */
  gap: 0.5rem;
  /* setting up padding */
  --pinline: 1rem;
  padding-inline: var(--pinline);
  padding-block: 0.3rem;
  /* getting pill like shape */
  border-radius: 1000px;

  @media screen and (max-width: 750px) {
    /*  */
    /*typography  */
    /*  */
    /* reducing font size because of space issues */
    font-size: var(--fs-small);
    /*  */
    /* layout */
    /*  */
    /* reducing padding and gap because less space to work with */
    --pinline: 0.5rem;
    gap: 0.2rem;
  }
`;

export default SpecialRating;
