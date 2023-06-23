import React from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Stars from "./Stars";
const RatingReviews = ({ productRating, productReviews }) => {
  return (
    <Wrapper>
      <div className="stars">
        <Stars rating={productRating} />
      </div>
      <div className="reviews text-regular">{productReviews}+ Reviews</div>
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

  .reviews {
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
