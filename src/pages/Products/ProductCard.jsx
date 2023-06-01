import React from "react";
import { styled } from "styled-components";
import Stars from "../../components/Stars";
import Currency from "../../components/Currency";
const ProductCard = ({ id, name, reviews, rating, price, image }) => {
  return (
    <Wrapper>
      {/* image section */}
      <div className="product__img">
        <img src={image.url} alt={image.filename} />
      </div>
      {/* details section */}
      <div className="product__details">
        {/* this classless div is here for layout only  wrapping rating and name together*/}
        <div>
          {/* ratings */}
          <div className="product__rating">
            <div className="rating-stars">
              <Stars rating={rating} />
            </div>
            <div className="rating-reviews bold">{reviews}+ Reviews</div>
          </div>
          {/* name */}
          <div className="product__name bold">{name}</div>
        </div>
        {/* footer wraps price and cta together */}
        <footer className="product__footer">
          {/* price */}
          <div className="product__price">
            <span className="bold">Price</span> <Currency price={price} />
          </div>
          {/* cta */}
          <button className="cta bold">Add to cart</button>
        </footer>
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

  /*  */
  /* typography */
  /*  */
  text-align: center;
  .rating-stars {
    font-size: 1.2rem;
  }

  /*  */
  /* layout */
  /*  */

  /* height and width */
  /* setting up card width */
  width: 300px;
  /* setting up image parent dimensions */
  .product__img {
    height: 200px;
  }
  /* setting up height and width of image */
  .product__img :where(img) {
    width: 100%;
    height: 100%;
  }
  /* setting up  min height of details */
  .product__details {
    min-height: 150px;
  }
  /* giving full with because
  it was shrinked because of flex parent centering it horizontally */
  .product__footer {
    width: 100%;
  }
  /* setting up border radius of card */
  border-radius: 1rem;
  /* box-shadow */
  /* adding box-shadow to card */
  box-shadow: 0 0 0.3rem 0 rgba(171, 171, 171, 0.2);
  /* padding */
  padding-inline: 1rem;
  padding-block: 2rem;
  .product__img {
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
  }

  .product__img :where(img) {
    /* making sure entire image is displayed  */
    object-fit: contain;
  }
  .cta {
    /* removing background and border */
    background: none;
    border: none;
    /* adding text-decoration */
    text-decoration: underline wavy 2px var(--clr-rating-stars);
    text-underline-offset: 0.3rem;
  }
  .product__price {
    /* arranging price label and value in same row */
    display: flex;
    /* adding little gap */
    gap: 0.5rem;
  }
  .product__details {
    /* centering elements of product__Detail horizontally in column 
    and also adding space-between them vertically */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .product__footer {
    /* adding space between price and cta */
    display: flex;
    justify-content: space-between;
  }
  .product__rating {
    /* centering rating-stars and rating-reviews vertically */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* margins */
  .product__img {
    margin-bottom: 1rem;
  }
  .product__rating {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 360px) {
    /* reducing font-size to adjust card in smaller screens */
    font-size: 0.9rem;
  }
`;

export default ProductCard;
