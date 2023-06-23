import React from "react";
import SpecialCustomerReview from "./SpecialCustomerReview";
import RatingReviews from "./RatingReviews";
import { styled } from "styled-components";
const ProductReviewCard = ({
  userName,
  userReview,
  productImage,
  nameColor,
  productRating,
  productReviews,
}) => {
  return (
    <Wrapper>
      <div className="flex-columns product-review-card">
        <div className="flex-column text-column">
          <SpecialCustomerReview
            name={userName}
            review={userReview}
            nameColor={nameColor}
          />
        </div>
        <div className="flex-column image-column">
          <img src={productImage} alt="" className="product__image" />
          <RatingReviews
            productRating={productRating}
            productReviews={productReviews}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* center aligning text-column and image-column  */
  .flex-columns {
    align-items: center;
  }

  /* centering image and ratingreviews */
  .image-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* creating some gap between image and ratingreviews */
  .image-column {
    gap: 0.3rem;
  }

  /*  */
  /* media queries */
  /*  */

  @media screen and (max-width: 750px) {
    /* on mobile devieces image column shows above text column */
    .image-column {
      order: -1;
    }
  }
`;

export default ProductReviewCard;
