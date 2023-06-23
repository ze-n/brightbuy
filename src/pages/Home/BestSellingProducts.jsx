import React from "react";
import ProductReviewCard from "../../components/ProductReviewCard";
import img1 from "../../assets/product1.png";
import img2 from "../../assets/product2.png";
import img3 from "../../assets/product3.png";
import CurvedSection from "../../components/Sections/CurvedSection/CurvedSection";
import { styled } from "styled-components";

const BestSellingProducts = () => {
  return (
    <Wrapper>
      {/* bgColor is the  bakground color of Crurved section  */}
      <CurvedSection bgColor="var(--bg-home-best-selling)">
        <h2 className="section-heading">Best Selling Products</h2>
        <div className="products-review-container">
          <ProductReviewCard
            userName="Martin Luthor"
            userReview="I purchased Cosmic Byte GK-18, It feels so good to type on this thing"
            productImage={img1}
            nameColor="var(--clr-home-best-selling-review-name)"
            productRating="4.6"
            productReviews="25435"
          />
          <ProductReviewCard
            userName="Eran Batoski"
            userReview="I have been wearing sneakers all my life, these Tracy Sneakers were something else."
            productImage={img2}
            productRating="4.3"
            productReviews="24545"
          />
          <ProductReviewCard
            userName="Harish Sharma"
            userReview="This watch is better than all previous ones I had"
            productImage={img3}
            productRating="5"
            productReviews="35435"
          />
        </div>
      </CurvedSection>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  color: var(--clr-home-best-selling);
  /* typography */
  /*  */
  .section-heading {
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */
  /* margins */
  .section-heading {
    margin-bottom: 4rem;
  }

  /* creating some gap between product review cards */
  .products-review-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .products-review-container {
    /* this thing reduces width of flex-column inside ProductReviewCard  */
    /* why this way because it works flawless */
    align-items: center;
  }
`;
export default BestSellingProducts;
