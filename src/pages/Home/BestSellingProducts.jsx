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
      <CurvedSection bgColor="var(--clr-white)">
        <h2 className="sub-heading">Best Selling Products</h2>
        <div className="products-review-container">
          <ProductReviewCard
            userName="Martin Luthor"
            userReview="I purchased Cosmic Byte GK-18, It feels so good to type on this thing"
            productImage={img1}
          />
          <ProductReviewCard
            userName="Eran Batoski"
            userReview="I have been wearing sneakers all my life, these Tracy Sneakers were something else."
            productImage={img2}
          />
          <ProductReviewCard
            userName="Nigga White"
            userReview="This watch is such a productivity steroid."
            productImage={img3}
          />
        </div>
      </CurvedSection>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* typography */
  /*  */
  .sub-heading {
    font-size: var(--fs-xxl);
    /* on small screens centering text */
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */
  /* margins */
  .sub-heading {
    margin-bottom: 4rem;
  }

  /* craeteing some gap between product review cards */
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
