import React from "react";
import { styled } from "styled-components";
const SpecialCustomerReview = ({ name, review }) => {
  return (
    <Wrapper>
      <p className="review">{review}</p>
      <p className="name">{name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .name {
    color: var(--clr-red-700);
  }
  /*  */
  /* typography*/
  /*  */

  .review {
    font-size: var(--fs-medium);
    font-weight: 600;
    text-align: center;
  }
  .name {
    font-size: var(--fs-medium);
    font-weight: 800;
  }

  /*  */
  /* layout */
  /*  */
  /* just setting some width because don't like the eye travel */
  max-width: 32ch;

  /* margins */
  .review {
    /* creating margin between reveiw and name */
    margin-bottom: 1rem;
  }
  /* centering name and review along y axis */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default SpecialCustomerReview;
