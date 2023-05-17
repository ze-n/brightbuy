import React from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
const RatingReviews = () => {
  return (
    <Wrapper>
      <div className="stars">
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
        <AiFillStar className="icon" />
      </div>
      <div className="reviews">50,000+ Reviews</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .icon {
    color: var(--clr-orange-400);
  }
  /*  */
  /* typography */
  /*  */
  .icon {
    font-size: var(--fs-medium);
  }
  .reviews {
    font-size: var(--fs-regular);
    font-weight: 600;
  }
  /*  */
  /* layout */
  /*  */
  /* aliging stars and reviews vertically */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margins */
  .stars {
    /* creating some margin between stars and review numbers */
    margin-bottom: 0.2rem;
  }
`;
export default RatingReviews;
