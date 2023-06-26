import React from "react";
import { styled } from "styled-components";
import API from "./Temp";
import Currency from "../../components/Currency";
import Stars from "../../components/Stars";
import Colors from "./Colors";
import BlackButton from "../../components/BlackButton";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/UserAuthContext";

const Details = ({ product }) => {
  const { productName, productPrice, productRating, productReviews, colors } =
    product;
  // calculating saleprice from discount and actual price
  let discount = 20;
  let salePrice = productPrice * ((100 - discount) / 100);
  const { addToCart } = useCart();
  const { currentUser } = useAuth();

  const handleAddToCart = () => {
    if (product) {
      console.log("hello this is me");
      addToCart(product.id, product);
    }
  };
  return (
    <Wrapper>
      {/* product name */}
      <div className="product__name | title">{productName}</div>
      {/* rating and reviews */}
      <div className="product__rating">
        {/* rating */}
        <span className="rating-stars">
          <Stars rating={productRating} />
        </span>
        {/* reviews */}
        <p className="rating-reviews">{productReviews}+ Reviews</p>
      </div>
      {/* price */}
      <div className="product__price">
        {/* actual price */}
        <s className="actual-price">
          <Currency price={productPrice} />
        </s>
        {/* sale price */}
        <span className="sale-price">
          <Currency price={salePrice} />
        </span>
        {/* discount */}
        <p className="discount">-{discount}%</p>
      </div>
      {/*  horizontal rule */}
      <hr className="h-rule" />
      {/* colors */}
      <div className="colors">
        <Colors colors={colors} />
      </div>
      {/* cta button */}
      <div onClick={handleAddToCart}>
        <BlackButton>Add to cart</BlackButton>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  .rating-stars {
    color: var(--clr-rating-stars);
  }
  .discount {
    color: var(--clr-red-500);
  }

  /*  */
  /* typography */
  /*  */
  --fs-rating-reviews: 1rem;
  --fs-rating-stars: 1.3rem;
  --fs-actual-price: 2rem;
  --fs-sale-price: 3rem;
  .product__name {
    font-weight: 600;
  }

  .rating-reviews {
    font-size: var(--fs-rating-reviews);
    font-weight: 600;
  }
  .rating-stars {
    font-size: var(--fs-rating-stars);
  }
  .actual-price {
    font-size: var(--fs-actual-price);
    opacity: 0.6;
  }
  .sale-price {
    font-size: var(--fs-sale-price);
    font-weight: 600;
  }
  .discount {
    font-size: var(--fs-actual-price);
  }
  /*  */
  /* layout */
  /*  */

  .product__rating {
    /* aliging rating-stars and rating-reviews in same row  */
    display: flex;
    /* aliging them center vertically */
    align-items: center;
    /* adding some gap */
    gap: 0.5rem;
  }
  .product__price {
    /* aliging prices and discount on same row */
    display: flex;
    /* aliging them vertically center */
    align-items: center;
    /* adding some gap  */
    gap: 1rem;
  }

  /* margins */
  .product__name {
    margin-bottom: 0.2rem;
  }
  .product__rating {
    margin-bottom: 1rem;
  }
  .product__price {
    margin-bottom: 1rem;
  }
  .h-rule {
    margin-bottom: 1rem;
  }
  .colors {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 900px) {
    /* reducting font sizes for smaller screens */
    --fs-actual-price: 1.5rem;
    --fs-sale-price: 2.5rem;
  }
  @media screen and (max-width: 500px) {
    /* reducing font-sizes for smaller screens */
    --fs-rating-reviews: 0.9rem;
    --fs-rating-stars: 1.1rem;
    --fs-actual-price: 1.2rem;
    --fs-sale-price: 1.5rem;
  }
`;
export default Details;
