import React from "react";
import { styled } from "styled-components";

const FeaturedProducts = () => {
  return (
    <Wrapper className="product__list" role="list">
      <h2 className="title">Best Sellers &rarr;</h2>
      <li className="product__item">
        <a href="#" className="product__link">
          <img
            src="https://images.unsplash.com/photo-1541727261696-8680e53c1149?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDM1Nzl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="product__image"
          />
          <p className="product__title">
            Black Hoddy Over- sized Standard size
          </p>
        </a>
      </li>
      <li className="product__item">
        <a href="#" className="product__link">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDQwMjN8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="product__image"
          />
          <p className="product__title">Canvas Black Shoes</p>
        </a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  /*  */
  /* typography */
  /*  */
  .product__title {
    font-size: var(--fs-medium);
  }
  .title {
    font-size: var(--fs-lg);
  }
  /*  */
  /* layout */
  /*  */
  /* setting images */
  --img-size: 70px;
  .product__image {
    width: var(--img-size);
    height: var(--img-size);
    object-fit: cover;
  }
  /* aliging text and images inside nav link */
  .product__link {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  /* setting max-width for product title */
  .product__title {
    max-width: 25ch;
  }
  /* setting margins */
  .title {
    margin-bottom: 2rem;
  }
  .product__item {
    margin-bottom: 1rem;
  }
  .product__title {
    margin-left: 1rem;
  }
`;

export default FeaturedProducts;
